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
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    year: "2024",
    badge: "Algorithms",
    description: "Core data structures, algorithmic problem solving, and Python-based implementation of DSA fundamentals.",
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2024",
    badge: "IoT",
    description: "Fundamentals of IoT architecture, sensor networks, connected devices, and embedded systems concepts.",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    year: "2025",
    badge: "Python",
    description: "Applied Python programming across computing fundamentals, problem solving, and algorithmic thinking.",
  }
];

export const projects = [
  {
    id: "aspect-based-sentiment-analysis",
    title: "Aspect-Based Sentiment Analysis (ABSA) for E-Commerce Reviews",
    category: "NLP & Machine Learning",
    year: "2025",
    summary:
      "Built an end-to-end ABSA pipeline for Amazon product reviews to extract aspect-level customer sentiment, pinpointing exactly which product features drive satisfaction or complaints rather than relying on overall star ratings alone.",
    pipeline: "Amazon Reviews → Text Preprocessing (Tokenization, Lemmatization) → XLM-RoBERTa + VADER Sentiment Scoring → XGBoost Classifier",
    metric: "Achieved ~90%+ accuracy with strong precision/recall/F1, cutting noise by 30-40% and lifting processing efficiency by ~40%, enabling analysis of up to 15,000 reviews weekly.",
    stack: ["Python", "NLTK", "Transformers", "XLM-RoBERTa", "VADER", "XGBoost"],
    link: "https://github.com/ChandraSekhar2304/Aspect_Based_Sentiment_Analysis",
  },
  {
    id: "deepfake-detection-system",
    title: "Deepfake Detection System",
    category: "Computer Vision & Deep Learning",
    year: "2025",
    summary:
      "Developed a CNN-based Deepfake Detection system to classify real vs. fake images/videos, addressing the growing risk of synthetic media misuse in security, media, and social-platform applications.",
    pipeline: "Raw Images/Video → OpenCV Face Extraction & Preprocessing → CNN with Transfer Learning → Real/Fake Classification",
    metric: "Achieved ~92-97% accuracy with strong precision/recall on benchmark deepfake datasets, cutting false detections by 15-25% and training time by 40-60% via transfer learning.",
    stack: ["Python", "CNN", "OpenCV", "TensorFlow", "Transfer Learning"],
    link: "https://github.com/ChandraSekhar2304/Deepfake-Detection",
  }
];

// Fallback compatibility
export const fallbackProjects = projects;
export const experience = education;
