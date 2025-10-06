from fastapi import APIRouter, HTTPException, Response, Request
from fastapi.params import Depends
from fastapi.responses import JSONResponse
from pyexpat.errors import messages
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from classes import Developer
from database import get_db
import secrets
import bcrypt
from classes import Developer, Session
from schemas import (DeveloperCreate, DeveloperResponse,
                     DeveloperAuthResponse, DeveloperLogin, DeveloperCheckLoginResponse)
from datetime import datetime, timedelta, timezone
from typing import Union

router = APIRouter()

def json_error_response(message: str, status_code: int = 400):
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "failure",
            "message": message,
            "user": None
        }
    )


# Check Function
@router.get("/check")
def auth_check():
    status_code = 200
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "success",
            "message": "Yes the authentication route works fine!"
        }
    )


# 1. Local Sign Up function
@router.post("/local-sign-up", response_model=DeveloperAuthResponse)
async def local_sign_up(developer: DeveloperCreate, db: Session = Depends(get_db)):
    try:
        api_key = secrets.token_hex(32)
        hashed_password = bcrypt.hashpw(developer.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        dev = Developer(
            name = developer.name,
            email = developer.email,
            password = hashed_password,
            api_key = api_key
        )
        db.add(dev)
        db.commit()
        db.refresh(dev)
    except IntegrityError as integrity_error:
        db.rollback()
        if developer.email in str(integrity_error.orig):
            raise HTTPException(status_code=400, detail="Email already exists")
        print("Integrity Error Occurred - ", integrity_error)
        raise HTTPException(status_code=400, detail="Validation Error Occurred!")
    except Exception as unknown_error:
        db.rollback()
        print("Unknown Error Occurred - ", unknown_error)
        raise HTTPException(status_code=500, detail="Unknown Error (LOCAL SIGN-UP)")
    return DeveloperAuthResponse(status="success", message="User Created")

# 2. Local Login
@router.post("/local-login")
async def local_login(response:Response, developer: DeveloperLogin, db: Session = Depends(get_db)):
    try:
        # hashed_password = bcrypt.hashpw(developer.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        login_dev = db.query(Developer).filter_by(
            email=developer.email,
        ).first()
        if not login_dev:
            db.rollback()
            raise HTTPException(status_code=404, detail="no_email_exists")
        if not bcrypt.checkpw(developer.password.encode("utf-8"), login_dev.password.encode("utf-8")):
            db.rollback()
            raise HTTPException(status_code=403, detail="invalid_password")

        # user exists. So log him in (CREATE SESSION -> STORE IN DB -> SEND COOKIE -> DONE!)
        # First check if session object already present - if yes update it
        session_id = secrets.token_urlsafe(32)
        present_session_object = db.query(Session).filter_by(
            dev_id = login_dev.dev_id
        ).first()
        if present_session_object:
            new_expiry_date = datetime.now(timezone.utc) + timedelta(hours=72)
            present_session_object.expires_at = new_expiry_date
            present_session_object.session_id = session_id
        else:
            # session object not present -> THIS IS FIRST TIME LOGIN -> create ad store sessions object
            new_session_object = Session(
                session_id = session_id,
                dev_id = login_dev.dev_id,
                expires_at=datetime.now(timezone.utc) + timedelta(hours=72)
            )
            db.add(new_session_object)

        db.commit()
        response.set_cookie(
            key="session_id",
            value=session_id,
            httponly=True,
            secure=True,  # must be False for localhost
            samesite="lax",
            max_age=3600 * 24 * 3,
            domain="localhost"  # force cookie domain
        )


    except IntegrityError as integrity_error:
        db.rollback()
        print("Integrity Error Occurred - ", integrity_error)
        raise HTTPException(status_code=400, detail="validation_error")
    return DeveloperAuthResponse(status="success", message="User Logged In")

# 3. Check If User Logged In
@router.get("/check-login", response_model=Union[DeveloperCheckLoginResponse, DeveloperAuthResponse])
async def check_login(request: Request, db: Session = Depends(get_db)):
    session_id = request.cookies.get("session_id")
    if not session_id:
        return DeveloperAuthResponse(status="failure", message="not_logged_in")

    user_session_object = db.query(Session).filter_by(session_id=session_id).first()
    if not user_session_object:
        return DeveloperAuthResponse(status="failure", message="invalid_session")

    user_found = db.query(Developer).filter_by(dev_id=user_session_object.dev_id).first();
    # Rolling expiry update
    user_session_object.expires_at = datetime.now(timezone.utc) + timedelta(hours=72)
    db.commit()

    return DeveloperCheckLoginResponse(status="success", name=user_found.name,
                                       email=user_found.email, dev_id= user_found.dev_id,
                                       message="user_login_success")





