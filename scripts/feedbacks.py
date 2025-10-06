from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse
from sqlalchemy.exc import IntegrityError
from schemas import (FeedbackCreate, FeedbackResponse,
                     DeveloperFeedbackData, DeveloperFeedbackDataGet)
from sqlalchemy.orm import Session
from fastapi.params import Depends
from database import get_db
from classes import Developer, Feedback
from typing import List
from uuid import UUID
import joblib


router = APIRouter()

model1_svm = joblib.load("sentiment_svm.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

def model_sample(feedback_text: str, model= model1_svm):
    try:
        feedback_text_vector = vectorizer.transform([feedback_text])
        model_prediction = model.predict(feedback_text_vector)
        model_probability = model.predict_proba(feedback_text_vector)
        return {
            "sentiment": 'Positive' if model_prediction[0] == 1 else 'Negative',
            "confidence": round(model_probability[0][model_prediction[0]] * 100, 2)
        }
    except Exception as e:
        print("Error Occurred While Prediction", e)
        raise Exception("Model Error")

# Check Function
@router.get("/check")
def feedback_check():
    status_code = 200
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "success",
            "message": "Yes the feedbacks route works fine!!!!"
        }
    )

# 1. Save Feedback in feedback db (with api key)
@router.post("/save-feedback", response_model=FeedbackResponse)
def save_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db)):
    try:
        received_api_key = feedback.api_key
        found_user = db.query(Developer).filter(Developer.api_key == received_api_key).first()
        if not found_user:
            raise HTTPException(status_code=404, detail="user_not_found---")
        # user found
        user_dev_id = found_user.dev_id
        if not user_dev_id:
            raise HTTPException(status_code=404, detail="user_not_found__")

        model_results = model_sample(feedback.feedback_text)
        feedback_entered = Feedback(
            dev_id = user_dev_id,
            feedback_text = feedback.feedback_text,
            sentiment = model_results["sentiment"],
            confidence = model_results["confidence"],
            spam = False
        )
        db.add(feedback_entered)
        db.commit()
        db.refresh(feedback_entered)
    except IntegrityError as integrity_error:
        db.rollback()
        raise HTTPException(status_code=400, detail="validation_error")

    return FeedbackResponse(status="success", message="feedback_added")

# 2. get the feedback for the particular user
@router.get("/get-feedback-data", response_model=List[DeveloperFeedbackData])
def get_feedback_data(dev_id: UUID = Query(...), db: Session = Depends(get_db)):
    try:
        feedbacks_fetched = db.query(Feedback).filter(Feedback.dev_id == dev_id).all()
        if not feedbacks_fetched:
            raise HTTPException(status_code=404, detail="No feedback found for this developer")
    except IntegrityError as integrity_error:
        raise HTTPException(status_code=400, detail="integrity_error")
    return feedbacks_fetched