import uuid

from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, TIMESTAMP, text, ForeignKey, Text, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship, declarative_base
from typing import Optional
from datetime import datetime

Base = declarative_base()

## DEVELOPER CLASS (represents developers table)
class Developer(Base):
    __tablename__ = "developers"

    dev_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(64), nullable=False)
    email = Column(String(320), nullable=False, unique=True)   # fixed length
    password = Column(String(120), nullable=False)
    api_key = Column(String(120), nullable=False, unique=True)
    created_at = Column(TIMESTAMP, server_default=text("now()"))

    # Relationship
    feedbacks = relationship("Feedback", back_populates="developer")
    sessions = relationship("Session", back_populates="developer")

## FEEDBACK CLASS (represents feedbacks table)
class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)
    dev_id = Column(UUID(as_uuid=True), ForeignKey("developers.dev_id"), nullable=False)
    feedback_text = Column(Text, nullable=False)
    sentiment = Column(String(20), nullable=False, server_default="Neutral")
    confidence = Column(Float)
    created_at = Column(TIMESTAMP, server_default=text("now()"))

    developer = relationship("Developer", back_populates="feedbacks")

class Session(Base):
    __tablename__ = "sessions"

    session_id = Column(Text, primary_key=True)
    dev_id = Column(UUID(as_uuid=True), ForeignKey("developers.dev_id"), nullable=False)
    created_at = Column(TIMESTAMP, server_default=text("now()"))
    expires_at = Column(TIMESTAMP, nullable=False)

    developer =relationship("Developer", back_populates="sessions")

