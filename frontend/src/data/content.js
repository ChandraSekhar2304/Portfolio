// Point this at your deployed backend once you deploy (e.g. "https://your-api.onrender.com")
export const API_BASE = "http://localhost:8000";

export const profile = {
  name: "Your Name",
  role: "Data Scientist",
  tagline: "I turn messy data into models that ship.",
  location: "Bengaluru, India",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
    { label: "Kaggle", href: "https://kaggle.com/yourname" },
  ],
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

export const experience = [
  {
    role: "Data Scientist",
    org: "Company Name",
    period: "2023 — Present",
    points: [
      "Built and shipped the churn model described in Projects, now running as a weekly batch job.",
      "Partnered with the retention team to translate model output into an action a human could actually take.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Previous Company",
    period: "2021 — 2023",
    points: [
      "Owned weekly reporting for a 12-person growth team and cut report turnaround from two days to same-day.",
      "Ran and analyzed pricing experiments across three markets.",
    ],
  },
  {
    role: "B.Tech, Computer Science",
    org: "Your University",
    period: "2017 — 2021",
    points: [],
  },
];

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
