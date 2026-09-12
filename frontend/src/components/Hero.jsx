import { profile } from "../data/content.js";

export default function Hero({ id }) {
  return (
    <section id={id} className="section hero">
      <p className="hero-eyebrow">{profile.location}</p>
      <h1 className="hero-title">
        {profile.tagline}
      </h1>
      <p className="hero-sub">
        {profile.name} — {profile.role}. Scroll down for projects, experience, and a way to reach me.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href={profile.resumeUrl} download>
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
