from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime

from sqlalchemy.dialects.mysql import FLOAT


# Request model for creating a developer
class DeveloperCreate(BaseModel):
    name: str
    email: str
    password: str
    # api_key: str

class DeveloperCreateAPP(BaseModel):
    name: str
    email: str
    password: str
    api_key: str

# Response model for returning developer info
class DeveloperResponse(BaseModel):
    dev_id: UUID
    name: str
    email: str
    api_key: str
    created_at: datetime

    class Config:
        from_attribute = True  # allows returning SQLAlchemy objects directly

# Request Model For Creating Feedback
class FeedbackCreate(BaseModel):
    dev_id: UUID
    feedback_text: str
    # sentiment: str
    # confidence: float

# Response Model For Feedback
class FeedbackResponse(BaseModel):
    id: int
    dev_id: UUID
    feedback_text: str
    sentiment: str
    confidence: float
    created_at: datetime

    class Config:
        from_attribute = True
