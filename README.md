# Data Science Portfolio — React + FastAPI

A lightweight, fast-loading portfolio built for a Data Science / ML job search.
Frontend is React (Vite), styling is plain CSS (no framework, no bloat), and the
backend is a small FastAPI service that serves your project data and receives
contact-form messages. Nothing heavy — one intentional motion moment on load,
otherwise static and calm so recruiters can scan it in seconds.

## What's inside

```
portfolio/
├── frontend/          React app (Vite)
│   ├── public/
│   └── src/
│       ├── components/
│       └── styles/
└── backend/           FastAPI app
    ├── main.py
    ├── requirements.txt
    └── data/projects.json
```

## 1. Personalize the content first

Before running anything, replace the placeholders:

- `frontend/src/data/content.js` — your name, tagline, bio, skills, experience, links, email
- `backend/data/projects.json` — your real projects (title, summary, metrics, stack, link)
- `frontend/public/resume.pdf` — drop your actual resume PDF here (the "Download résumé" button links to it)
- `frontend/public/` — replace `favicon.svg` if you want your own mark

Search for `Your Name` and `you@example.com` across the project to make sure nothing placeholder slips through.

## 2. Run the backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API is now at `http://localhost:8000`. Messages sent through the contact
form are appended to `backend/data/messages.json` — wire up real email sending
in `main.py` (`send_notification`) with SMTP/SendGrid/Resend when you're ready to deploy.

## 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The app calls the backend at `http://localhost:8000` for project
data and the contact form (see `frontend/src/data/content.js` → `API_BASE`).

## 4. Deploy it (free tiers work fine)

- **Frontend** → Vercel or Netlify: point it at `frontend/`, build command `npm run build`, output `dist`.
- **Backend** → Render or Railway: point it at `backend/`, start command `uvicorn main:app --host 0.0.0.0 --port $PORT`.
- Update `API_BASE` in `frontend/src/data/content.js` to your deployed backend URL, and add your deployed frontend URL to `origins` in `backend/main.py`.
- Buy a small domain or use the free `vercel.app` / `onrender.com` subdomain — either is fine for recruiters.

## Why this stack for a Data Science application

- **React + plain CSS** shows you can ship a clean, fast frontend without leaning on a UI kit.
- **FastAPI** is the same framework family you'd use for a model-serving API, so recruiters
  reviewing the repo see backend/API skills that map directly to ML deployment work — not just a
  static site.
- The contact form round-trips through a real API (validation, storage, structured response),
  which is a small but genuine demonstration of end-to-end thinking.

## Before you send the link to recruiters

- [ ] Real name, bio, and photo (optional) added
- [ ] At least 3 real projects with an actual metric/result each, and live/code links
- [ ] Resume PDF in `frontend/public/resume.pdf`
- [ ] Contact form tested end-to-end (message shows up in `backend/data/messages.json`)
- [ ] Deployed and the deployed link opens correctly on mobile
