"""
Portfolio backend — FastAPI

Two jobs:
1. Serve project data to the frontend from data/projects.json
   (so projects can be updated without touching frontend code / redeploying it).
2. Accept contact-form submissions, validate them, store them, and
   (optionally) forward a notification email.

Run locally:
    uvicorn main:app --reload --port 8000
"""

import json
import re
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, field_validator

BASE_DIR = Path(__file__).resolve().parent
PROJECTS_FILE = BASE_DIR / "data" / "projects.json"
MESSAGES_FILE = BASE_DIR / "data" / "messages.json"

app = FastAPI(title="Portfolio API", version="1.0.0")

# Add your deployed frontend URL here once you deploy (e.g. "https://yourname.vercel.app")
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

    @field_validator("name")
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("Name must be at least 2 characters.")
        return v

    @field_validator("email")
    @classmethod
    def email_looks_valid(cls, v: str) -> str:
        v = v.strip()
        if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", v):
            raise ValueError("That doesn't look like a valid email address.")
        return v

    @field_validator("message")
    @classmethod
    def message_not_empty(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 10:
            raise ValueError("Message should be at least 10 characters.")
        if len(v) > 2000:
            raise ValueError("Message is too long (max 2000 characters).")
        return v


def send_notification(entry: dict) -> None:
    """
    Placeholder for real email delivery.
    Wire this up with SMTP, SendGrid, Resend, etc. before deploying, e.g.:

        import smtplib
        from email.message import EmailMessage
        msg = EmailMessage()
        msg["Subject"] = f"Portfolio message from {entry['name']}"
        msg["From"] = "noreply@yourdomain.com"
        msg["To"] = "you@example.com"
        msg.set_content(entry["message"])
        with smtplib.SMTP("smtp.yourprovider.com", 587) as s:
            s.starttls()
            s.login("user", "password")
            s.send_message(msg)
    """
    pass


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/projects")
def get_projects():
    if not PROJECTS_FILE.exists():
        raise HTTPException(status_code=404, detail="No project data found.")
    with open(PROJECTS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


@app.post("/api/contact")
def post_contact(payload: ContactMessage):
    entry = payload.model_dump()
    entry["received_at"] = datetime.now(timezone.utc).isoformat()

    existing = []
    if MESSAGES_FILE.exists():
        with open(MESSAGES_FILE, "r", encoding="utf-8") as f:
            try:
                existing = json.load(f)
            except json.JSONDecodeError:
                existing = []

    existing.append(entry)
    with open(MESSAGES_FILE, "w", encoding="utf-8") as f:
        json.dump(existing, f, indent=2)

    send_notification(entry)

    return {"status": "sent", "message": "Thanks — I'll get back to you soon."}
