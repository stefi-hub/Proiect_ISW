from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from sqlalchemy.orm import Session
from passlib.context import CryptContext
import jwt
from jwt import PyJWTError
from typing import Annotated
import models
from database import SessionLocal, engine
from passlib.hash import bcrypt

security = HTTPBearer()

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

class PostBase(BaseModel):
    title: str
    content: str
    user_id: int

class UserBase(BaseModel):
    username: str
    password: str
    is_admin: bool

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def hash_password(password: str):
    return pwd_context.hash(password)

def authenticate_user(db: Session, username: str, password: str):
    user = db.query(models.User).filter(models.User.username == username).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        return None
    return user

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security), db: Session = Depends(get_db)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        is_admin: bool = payload.get("is_admin")
        if username is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid authentication credentials")
        return {"username": username, "is_admin": is_admin}
    except PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid authentication credentials")

@app.get("/protected_route/")
async def protected_route(current_user: dict = Depends(get_current_user)):
    return {"message": "This route is protected"}

db_dependency = Annotated[Session, Depends(get_db)]

SECRET_KEY = "4zdvMXq0-c16s5mQBDF8K5wohkhr8U3Oe1-yH-Jn9Eo"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()

@router.post("/login/", status_code=status.HTTP_200_OK)
async def login(username: str, password: str, db: db_dependency):
    user = authenticate_user(db, username, password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")

    # Generate JWT token
    token = jwt.encode({"sub": user.username, "is_admin": user.is_admin}, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}

@app.options("/login/")
async def options_login():
    return {"Allow": "POST"}

@app.post("/posts/", status_code=status.HTTP_201_CREATED)
async def create_post(post: PostBase, db: db_dependency):
    db_post = models.Post(**post.dict())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

# When creating a new user, hash the password and store it in the password column
@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase, db: db_dependency, is_admin: bool = False):
    hashed_password = hash_password(user.password)
    db_user = models.User(username=user.username, password=hashed_password, is_admin=is_admin)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Add an OPTIONS route handler for the /users/ endpoint
@app.options("/users/")
async def options_users():
    return {"message": "Allowed Methods: GET, POST"}

@app.get("/users/{user_id}", status_code=status.HTTP_200_OK)
async def read_user(user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail='User not found')
    return user

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
