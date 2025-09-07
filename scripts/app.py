from sqlalchemy import create_engine, false, text
from sqlalchemy.orm import sessionmaker, Session
from classes import Base, Developer, Feedback
from schemas import DeveloperCreate, DeveloperResponse, FeedbackCreate, FeedbackResponse
from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse

SQLALCHEMY_DB_URL = "postgresql+psycopg2://postgres:password@localhost:5432/feedbackfeel"
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
@app.post("/feedback", response_model=FeedbackResponse)
def insert_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db)):
    feed = Feedback(
        dev_id=feedback.dev_id,
        feedback_text = feedback.feedback_text,
        sentiment = feedback.sentiment,
        confidence = feedback.confidence
    )
    db.add(feed)
    db.commit()
    db.refresh(feed)
    return feed

