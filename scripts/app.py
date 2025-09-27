from sqlalchemy import create_engine, false, text
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.exc import IntegrityError
from classes import Base, Developer, Feedback
from schemas import DeveloperCreateAPP, DeveloperResponse, FeedbackCreate, FeedbackResponse
from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import JSONResponse
from routes import authentication
from database import get_db
import joblib
from fastapi.middleware.cors import CORSMiddleware

model1_svm = joblib.load("sentiment_svm.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

app = FastAPI()
app.include_router(authentication.router, prefix="/auth", tags=["Authentication"])
# Allow frontend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # GET, POST, PUT, DELETE etc.
    allow_headers=["*"],
)

# simple test check route
@app.get("/")
def run_app():
    return JSONResponse(
        status_code=200,
        content={"message": "The Application Runs Fine!"}
    )

# Simple Inserting
@app.post("/developer", response_model=DeveloperResponse)
async def insert_developer(developer: DeveloperCreateAPP, db: Session = Depends(get_db)):
    dev = Developer(
        name=developer.name,
        email=developer.email,
        password=developer.password,
        api_key=developer.api_key
    )
    try:
        db.add(dev)
        db.commit()
        db.refresh(dev)
    except IntegrityError as e:
        db.rollback()
        print("DB Error:", e)  # prints full error in console
        raise HTTPException(status_code=400, detail="Email already exists or invalid data")
    except Exception as e:
        db.rollback()
        print("Unexpected Error:", e)
        raise HTTPException(status_code=500, detail="Internal server error")

    return dev

# Inserting a feedback
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


@app.post("/feedback", response_model=FeedbackResponse)
def insert_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db)):
    model_results = model_sample(feedback.feedback_text)
    feed = Feedback(
        dev_id=feedback.dev_id,
        feedback_text = feedback.feedback_text,
        sentiment = model_results["sentiment"],
        confidence = model_results["confidence"]
    )
    try:
        db.add(feed)
        db.commit()
        db.refresh(feed)
    except IntegrityError as e:
        db.rollback()
        print("Integrity Error Occurred! - ", e)
        raise HTTPException(status_code=400, detail="Validation Error Occurred")
    except Exception as e:
        db.rollback()
        print("Unexpected Error Occurred! - ", e)
        raise HTTPException(status_code=500, detail="Unexpected Error Occurred!")
    return feed

