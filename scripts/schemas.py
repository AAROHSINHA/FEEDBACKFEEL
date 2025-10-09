from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime

from sqlalchemy.dialects.mysql import FLOAT

'''
Developer Responses =>
1. DeveloperCreate - create Developer in signup
2. DeveloperCreateApp - Create developer in universal route in app
3. DeveloperResponse - Response to return the developer object
4. DeveloperSignUpResponse - Response in Signup
'''

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

# Response for Signup
class DeveloperAuthResponse(BaseModel):
    status: str
    message: str
    # user: DeveloperResponse

class DeveloperCheckLoginResponse(BaseModel):
    status: str
    name: str
    email: str
    dev_id: UUID
    message: str


# Login
class DeveloperLogin(BaseModel):
    email: str
    password: str


# Request Model For Creating Feedback
class FeedbackCreate(BaseModel):
    api_key : str
    feedback_text: str

# Response Model For Feedback
class FeedbackResponse(BaseModel):
    status: str
    message: str

class DeveloperFeedbackDataGet(BaseModel):
    dev_id: str

class DeveloperFeedbackData(BaseModel):
    feedback_text: str
    sentiment: str
    confidence: float
    created_at: datetime
    spam: bool
    bookmarked: bool

    class Config:
        orm_mode=True