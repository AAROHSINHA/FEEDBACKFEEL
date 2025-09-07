from fastapi import FastAPI
from typing import List
from pydantic import BaseModel, Field, field_validator

app = FastAPI()
students = []

@app.get("/")
def start_app():
    return {
        "message": "APP STARTED!"
    }

class MyCustomError(Exception):
    """A custom exception for specific error conditions."""
    def __init__(self, message="An unexpected error occurred."):
        self.message = message
        super().__init__(self.message)

class Student(BaseModel):
    id: int
    name: str = Field(..., min_length=5, max_length=32, description="Student Name")
    branch: str = Field(..., min_length=5, max_length=32, description="Student Branch")
    subjects: List[str] = Field([], min_length=1, max_length=7, description="Student Subjects")
    cgpa: float = Field(None)

    @field_validator("branch")
    def check_branches(self, branch):
        available_branches = ["Computer Science Engineering", "Electronics And Communication Engineering", "Mechanical Engineering"]
        if branch not in available_branches:
            raise ValueError("BRANCH NOT AVAILABLE")
        return branch

    @field_validator("cgpa")
    def check_cgpa(self, cg):
        if cg < 0.0 or cg > 10.0:
            return ValueError("cg must be between 0-10")
        return cg

@app.post("/students")
def add_student(student: Student):
    # first check in students if similar id present
    for student_data in students:
        if student_data["id"] == student.model_dump()["id"]:
            raise MyCustomError("Student Already Present")
    students.append(student.model_dump())
    return students

@app.get("/students")
def get_students():
    return students

@app.get("/students/{id}")
def get_student_id():
    for student_data in students:
        if student_data["id"] == id:
            return student_data
        break
    return {"message": "404 not found"}

@app.put("/student/{student_id}")
def update_student(student_id: int, student: Student):
    for student_data in students:
        if student_data["id"] == student_id:
            student_data = student
            break
    return {"message": "404 not found"}
    
@app.delete("/student/{student_id}")
def delete_student(student_id: int):
    index = 0
    found = False
    for student_data in students:
        if student_data["id"] == student_id:
            found = True
            break
        index+=1
    if not found:
        return {"message": "404 not found"}
    students.remove(index)
    return students
    







