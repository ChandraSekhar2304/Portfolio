import { profile } from "../data/content.js";

export default function Hero({ id }) {
  return (
    <section id={id} className="section hero">
      <p className="hero-eyebrow">{profile.location}</p>
      <h1 className="hero-title">
        {profile.tagline}
      </h1>
      <p className="hero-sub">
        {profile.name} — {profile.role}. Scroll down for projects, education, and a way to reach me.
      </p>

      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href={profile.resumeUrl}
          download="Banala_Chandra_Sekhar_Resume.pdf"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 7 }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download résumé
        </a>
        <a className="btn btn-ghost" href="#projects" onClick={(e) => {
          e.preventDefault();
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}>
          See projects
        </a>
      </div>

      <svg
        className="hero-spark"
        viewBox="0 0 340 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline
          className="hero-spark-line"
          points="4,70 50,58 90,66 130,30 170,42 210,18 250,26 290,10 336,20"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="hero-spark-dot" cx="336" cy="20" r="4" fill="var(--accent-warm)" />
      </svg>
    </section>
  );
}
