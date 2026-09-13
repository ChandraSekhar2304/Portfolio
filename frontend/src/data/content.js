// Point this at your deployed backend once you deploy (e.g. "https://your-api.onrender.com")
// Frontend and backend deploy together on Vercel Services under one domain,
// so calls are relative ("/api/..."). Locally, Vite's dev-server proxy (see
// vite.config.js) forwards "/api" to uvicorn on port 8000.
export const API_BASE = "";
export const profile = {
  name: "Banala Naga Bala Chandra Sekhar Kumar",
  role: "Data Scientist",
  tagline: "I turn messy data into models that ship.",
  location: "Hyderabad, India",
  email: "banalachandrasekharkumar@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1O_fGm1wIebXmYHw0dHEDi4eULgSdrGik/view?usp=sharing",
  links: [
    { label: "GitHub", href: "https://github.com/ChandraSekhar2304" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/banala-naga-bala-chandra-sekhar-kumar-941722291/" },
    { label: "Kaggle", href: "https://www.kaggle.com/banalachandra" }]
};

export const about = {
  paragraphs: [
    "I'm a data scientist who likes problems with a clear before-and-after: a metric that moves, a process that gets faster, a decision that gets easier to make. Most of my work sits at the point where a model has to survive contact with a real production system.",
    "Recently that's meant forecasting, churn modeling, and NLP — always with an eye on what happens after the notebook, when the model has to run on a schedule, get monitored, and eventually get replaced by a better one.",
  ],
};

export const skills = [
  {
    category: "Modeling",
    items: ["Regression & classification", "Gradient boosting (XGBoost, LightGBM)", "Time-series forecasting", "NLP / transformers", "Experiment design & A/B testing"],
  },
  {
    category: "Engineering",
    items: ["Python", "SQL", "PyTorch", "FastAPI", "Docker", "Airflow"],
  },
  {
    category: "Data & Infra",
    items: ["Pandas / Polars", "PostgreSQL", "Spark", "AWS (S3, SageMaker)", "MLflow"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "R.V.R & J.C College of Engineering",
    period: "2022 — 2026",
    location: "Guntur, Andhra Pradesh",
    details: [
      "Specializing in Machine Learning, Statistical Modeling, and Data Engineering.",
      "Key Coursework: Machine Learning, Deep Learning, Data Structures & Algorithms, Database Management Systems (DBMS), Probability & Statistics, Python Programming.",
    ],
  },
  {
    degree: "Intermediate / Higher Secondary (MPC)",
    institution: "Junior College",
    period: "2020 — 2022",
    location: "Andhra Pradesh, India",
    details: [
      "Specialized in Mathematics, Physics, and Chemistry (MPC).",
      "Developed a strong analytical foundation in mathematical problem-solving and logic.",
    ],
  },
];

// Backwards compatibility alias
export const experience = education;

// Fallback data used only if the backend isn't running — the live source of truth
// is backend/data/projects.json, served at GET /api/projects.
export const fallbackProjects = [
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    summary:
      "Built a gradient-boosted model to flag subscribers likely to cancel 30 days out, replacing a rule-based heuristic the retention team had been using.",
    metric: "Lifted recall on at-risk customers from 41% to 76%, at a precision retention could act on.",
    stack: ["Python", "XGBoost", "Pandas", "scikit-learn", "MLflow"],
    link: "https://github.com/yourname/churn-prediction",
    year: "2025",
  },
];
