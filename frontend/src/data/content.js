// Point this at your deployed backend once you deploy (e.g. "https://your-api.onrender.com")
// Frontend and backend deploy together on Vercel Services under one domain,
// so calls are relative ("/api/..."). Locally, Vite's dev-server proxy (see
// vite.config.js) forwards "/api" to uvicorn on port 8000.
export const API_BASE = "";

export const profile = {
  name: "Banala Naga Bala Chandra Sekhar Kumar",
  role: "Data Scientist & ML Engineer",
  tagline: "I turn messy data into production-ready models.",
  location: "Hyderabad, India",
  email: "banalachandrasekharkumar@gmail.com",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/ChandraSekhar2304" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/banala-naga-bala-chandra-sekhar-kumar-941722291/" },
    { label: "Kaggle", href: "https://www.kaggle.com/banalachandra" },
  ],
};

export const about = {
  paragraphs: [
    "I am a Data Scientist and Machine Learning Engineer passionate about bridging the gap between mathematical theory and production-ready systems. I focus on end-to-end ML workflows — from exploratory data analysis and feature engineering to model deployment and monitoring.",
    "My hands-on work emphasizes Gradient Boosting (XGBoost, LightGBM), Time-Series Forecasting, and Applied NLP with Transformers. Rather than stopping at standalone notebooks, I build reproducible, containerized microservices served with FastAPI and Docker, ready to solve real-world problems with quantifiable business impact.",
  ],
};

export const skills = [
  {
    category: "Modeling & Algorithms",
    items: [
      "Regression & Classification",
      "Gradient Boosting (XGBoost, LightGBM)",
      "Time-Series Forecasting (Prophet, ARIMA)",
      "NLP & Transformers (Hugging Face, BERT)",
      "Feature Engineering & Statistical Testing",
    ],
  },
  {
    category: "Engineering & Deployment",
    items: [
      "Python (OOP, Scientific Stack)",
      "FastAPI & RESTful APIs",
      "Docker & Containerization",
      "SQL & Database Design",
      "Git & CI/CD Pipelines",
    ],
  },
  {
    category: "Data Tools & Frameworks",
    items: [
      "Pandas & NumPy & Polars",
      "Scikit-Learn & PyTorch",
      "PostgreSQL & SQLite",
      "MLflow & Model Tracking",
      "Matplotlib, Seaborn & Plotly",
    ],
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
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    period: "2020 — 2022",
    location: "Repalle, Andhra Pradesh, India",
    details: [
      "Specialized in Mathematics, Physics, and Chemistry (MPC).",
      "Developed a strong analytical foundation in mathematical problem-solving and logic.",
    ],
  },
  {
    degree: "Secondary School Certificate",
    institution: "Al Quamar Primary and High School",
    period: "2019 — 2020",
    location: "Nizampatnam, Andhra Pradesh, India",
    details: [
      "Graduated with top distinction and high academic standing in secondary schooling.",
      "Built a solid foundational understanding in Mathematics, Science, and Analytical Thinking.",
    ],
  },
];

export const certifications = [
  {
    title: "Machine Learning & Deep Learning",
    issuer: "Specialization & Hands-on Projects",
    year: "2024",
    badge: "ML / Deep Learning",
    description: "Supervised Learning, Neural Networks, CNNs, Transformer Architectures, and Hyperparameter Optimization.",
  },
  {
    title: "Python for Data Science & ML",
    issuer: "Applied Practical Mastery",
    year: "2024",
    badge: "Data Science",
    description: "Advanced Pandas, NumPy, Scikit-Learn pipelines, feature engineering, and statistical hypothesis testing.",
  },
  {
    title: "Data Structures & Algorithms in Python",
    issuer: "Algorithmic Problem Solving",
    year: "2023",
    badge: "Algorithms",
    description: "Strong command of dynamic programming, graph algorithms, asymptotic time complexity, and data structures.",
  },
  {
    title: "Kaggle Competitions & Community Contributor",
    issuer: "Kaggle",
    year: "Active",
    badge: "Competitive ML",
    description: "Building predictive models, competitive feature engineering notebooks, and evaluating real-world datasets.",
  },
];

export const projects = [
  {
    id: "churn-prediction",
    title: "Customer Churn & Retention Analytics Engine",
    category: "Machine Learning & MLOps",
    year: "2025",
    summary:
      "Engineered an end-to-end predictive pipeline to identify subscribers at risk of churn 30 days in advance, substituting rule-based heuristics with probabilistic gradient boosting.",
    pipeline: "Raw Telemetry → Feature Engineering → Optuna Tuned XGBoost → FastAPI Service → Docker",
    metric: "Lifted recall on at-risk customers from 41% to 76% at 84% ROC-AUC, enabling timely retention interventions.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "Docker", "Pandas", "MLflow"],
    link: "https://github.com/ChandraSekhar2304/churn-prediction",
  },
  {
    id: "demand-forecasting",
    title: "Multi-Store Retail Demand Forecasting Engine",
    category: "Time-Series & Operations",
    year: "2024",
    summary:
      "Constructed a hierarchical time-series model forecasting weekly SKU-level demand across retail distribution nodes to optimize replenishment schedules and prevent stockouts.",
    pipeline: "Historical Sales Data → Prophet Seasonality Decomposition → LightGBM Regressor → Automated SQL Pipeline",
    metric: "Reduced forecast error (MAPE) from 22% to 13%, cutting out-of-stock risk in simulated demand runs.",
    stack: ["Python", "Prophet", "LightGBM", "PostgreSQL", "Pandas", "Statsmodels"],
    link: "https://github.com/ChandraSekhar2304/demand-forecasting",
  },
  {
    id: "resume-screener",
    title: "NLP Resume & Technical Profile Screener",
    category: "NLP & Transformers",
    year: "2024",
    summary:
      "Fine-tuned transformer encoder models to evaluate and rank technical candidate profiles against complex job descriptions with interpretable token-level attribution.",
    pipeline: "Document Parsing → Tokenization → Fine-Tuned RoBERTa Encoder → Cosine Similarity & Cross-Attention → REST API",
    metric: "Achieved 91.2% F1-score across technical skill extraction benchmarks, accelerating screening turnaround by ~60%.",
    stack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "Docker", "Regex"],
    link: "https://github.com/ChandraSekhar2304/resume-screener",
  },
];

// Fallback compatibility
export const fallbackProjects = projects;
export const experience = education;
