# Banala Naga Bala Chandra Sekhar Kumar — Personal Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://portfolio-six-theta-f07inqyqf6.vercel.app)
[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61DAFB?style=flat&logo=react)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Language-Python%203.11-3776AB?style=flat&logo=python)](https://python.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Welcome to the official repository for my personal engineering portfolio website. Built from the ground up with a focus on editorial typography, high performance, and showcase-ready machine learning case studies.

**Live Link:** [portfolio-six-theta-f07inqyqf6.vercel.app](https://portfolio-six-theta-f07inqyqf6.vercel.app)

---

## 👨‍💻 About Me

I am a Data Scientist and Machine Learning Engineer based in Hyderabad, India, currently pursuing my B.Tech in Computer Science and Engineering at R.V.R & J.C College of Engineering (2022 — 2026). 

My work centers on developing scalable predictive models and end-to-end data systems — spanning Gradient Boosting (XGBoost/LightGBM), Time-Series Forecasting, and Applied NLP with Transformers. Rather than stopping at standalone Jupyter notebooks, I build containerized microservices served with FastAPI and Docker.

- **Email:** [banalachandrasekharkumar@gmail.com](mailto:banalachandrasekharkumar@gmail.com)
- **LinkedIn:** [linkedin.com/in/banala-naga-bala-chandra-sekhar-kumar](https://www.linkedin.com/in/banala-naga-bala-chandra-sekhar-kumar-941722291/)
- **GitHub:** [github.com/ChandraSekhar2304](https://github.com/ChandraSekhar2304)
- **Kaggle:** [kaggle.com/banalachandra](https://www.kaggle.com/banalachandra)

---

## ✨ Key Portfolio Features

- **High-Performance Editorial Aesthetic:** Built with modern IBM Plex typography and a clean, brutalist-inspired design with zero CSS framework bloat.
- **Dark / Light Mode System:** Persistent theme engine with automatic OS `prefers-color-scheme` detection and smooth color transitions.
- **IntersectionObserver Scrollspy:** Real-time navigation tracking that highlights the active section in the sidebar as you scroll through the page.
- **Interactive Profile Lightbox:** Click-to-expand avatar modal with accessible keyboard navigation (`Escape` to close).
- **ML Pipeline Visualizations:** Each project features an explicit architecture pipeline breakdown (`Raw Telemetry → Feature Engineering → Model → REST API → Docker`) alongside quantitative business metrics.
- **Direct Resume Download:** One-click instant direct download for [resume.pdf](frontend/public/resume.pdf).
- **Resilient Contact Delivery:** Integrated FormSubmit pipeline delivering messages straight to Gmail, paired with an instant Gmail Web compose fallback.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Vanilla CSS Design System, Responsive Flexbox & CSS Grid |
| **Backend** | Python 3.11, FastAPI, Pydantic, Uvicorn |
| **Data & ML** | XGBoost, LightGBM, PyTorch, Hugging Face, Prophet, Scikit-Learn, Pandas, NumPy |
| **Deployment** | Vercel (Edge CDN, Automated Git Deployments, Serverless Functions) |

---

## 📁 Repository Structure

```
portfolio/
├── frontend/                     # React 18 + Vite Single Page Application
│   ├── public/
│   │   ├── favicon.svg           # Custom Data Science Neural Vector Favicon
│   │   ├── Profile.jpg           # Profile Headshot
│   │   └── resume.pdf            # Curated Curriculum Vitae (Direct Download)
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx         # Background & Philosophy
│   │   │   ├── Certifications.jsx# Credentials & Competitive Highlights
│   │   │   ├── Contact.jsx       # FormSubmit & Instant Mail Handler
│   │   │   ├── Education.jsx     # B.Tech, Intermediate, Schooling Timeline
│   │   │   ├── Hero.jsx          # Tagline, Spark Animation & Resume Download
│   │   │   ├── Projects.jsx      # End-to-End Case Studies & Pipeline Badges
│   │   │   ├── Sidebar.jsx       # Navigation, Lightbox Avatar & Theme Toggle
│   │   │   └── Skills.jsx        # Modeling, Engineering & Data Tools Grid
│   │   ├── data/
│   │   │   └── content.js        # Centralized Content & Configuration
│   │   ├── styles/
│   │   │   └── index.css         # CSS Tokens, Dark/Light Mode, Layout & Animations
│   │   ├── App.jsx               # Application Root, Theme Provider & Scrollspy
│   │   └── main.jsx              # React DOM Entrypoint
│   ├── index.html                # HTML5 Semantic Template with Meta Tags
│   └── package.json              # Frontend Dependencies & Scripts
├── backend/                      # FastAPI Microservice
│   ├── data/
│   │   └── projects.json         # Structured Project Records
│   ├── main.py                   # REST API Handlers & Fallback File Storage
│   └── requirements.txt          # Python Dependencies
├── vercel.json                   # Vercel Deployment & Route Rewrites Configuration
└── README.md                     # Repository Documentation
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js** (v18.x or higher)
- **Python** (v3.10 or higher)
- **Git**

### 2. Clone the Repository
```bash
git clone https://github.com/ChandraSekhar2304/Portfolio.git
cd Portfolio
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start locally at `http://localhost:5173`.

### 4. Backend Setup (Optional for Local API)
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
The API documentation is available at `http://localhost:8000/docs`.

---

## 📈 Featured Machine Learning Projects

1. **[Aspect-Based Sentiment Analysis (ABSA) for E-Commerce Reviews](https://github.com/ChandraSekhar2304/Aspect_Based_Sentiment_Analysis)**
   - *Architecture:* Amazon Reviews → Text Preprocessing (Tokenization, Lemmatization) → XLM-RoBERTa + VADER Sentiment Scoring → XGBoost Classifier
   - *Impact:* Achieved ~90%+ accuracy with strong precision/recall/F1, cutting noise by 30-40% and lifting processing efficiency by ~40%, enabling analysis of up to 15,000 reviews weekly.
2. **[Deepfake Detection System](https://github.com/ChandraSekhar2304/Deepfake-Detection)**
   - *Architecture:* Raw Images/Video → OpenCV Face Extraction & Preprocessing → CNN with Transfer Learning → Real/Fake Classification
   - *Impact:* Achieved ~92-97% accuracy with strong precision/recall on benchmark deepfake datasets, cutting false detections by 15-25% and training time by 40-60% via transfer learning.

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE). Feel free to explore the code, star the repository, or reach out for collaborations!
