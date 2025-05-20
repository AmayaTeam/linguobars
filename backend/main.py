from fastapi import FastAPI
from db import init_db
from user.views import router as user_router

app = FastAPI()

@app.on_event("startup")
async def on_startup():
    await init_db()

app.include_router(user_router, prefix="/user", tags=["user"])

@app.get("/ping")
def ping():
    return {"message": "pong"} 