from sqlalchemy import create_engine, false, text
from sqlalchemy.orm import sessionmaker, Session
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