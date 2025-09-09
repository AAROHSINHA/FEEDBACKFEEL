from sqlalchemy import create_engine, false, text
from sqlalchemy.orm import sessionmaker, Session
from classes import Base, Developer, Feedback
from schemas import DeveloperCreate, DeveloperResponse, FeedbackCreate, FeedbackResponse
from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse
import joblib

SQLALCHEMY_DB_URL = "postgresql+psycopg2://postgres:password@localhost:5432/feedbackfeel"
model1_svm = joblib.load("sentiment_svm.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")
engine = create_engine(SQLALCHEMY_DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()

# simple test check route
@app.get("/")
def run_app():
    return JSONResponse(
        status_code=200,
        content={"message": "The Application Runs Fine!"}
    )

# Simple Inserting
@app.post("/developer", response_model=DeveloperResponse)
async def insert_developer(developer: DeveloperCreate, db: Session = Depends(get_db)):
    dev = Developer(
        name=developer.name,
        email=developer.email,
        password=developer.password,
        api_key=developer.api_key
    )
    db.add(dev)
    db.commit()
    db.refresh(dev)
    return dev # FastAPI uses DeveloperResponse via orm_mode

# Inserting a feedback
def model_sample(feedback_text: str, model= model1_svm):
    feedback_text_vector = vectorizer.transform([feedback_text])
    model_prediction = model.predict(feedback_text_vector)
    model_probability = model.predict_proba(feedback_text_vector)
    return {
        "sentiment": 'Positive' if model_prediction[0] == 1 else 'Negative',
        "confidence": round(model_probability[0][model_prediction[0]] * 100, 2)
    }



@app.post("/feedback", response_model=FeedbackResponse)
def insert_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db)):
    model_results = model_sample(feedback.feedback_text)
    feed = Feedback(
        dev_id=feedback.dev_id,
        feedback_text = feedback.feedback_text,
        sentiment = model_results["sentiment"],
        confidence = model_results["confidence"]
    )
    db.add(feed)
    db.commit()
    db.refresh(feed)
    return feed

