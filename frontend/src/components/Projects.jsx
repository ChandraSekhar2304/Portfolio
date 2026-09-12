import { useEffect, useState } from "react";
import { API_BASE, fallbackProjects } from "../data/content.js";

export default function Projects({ id }) {
  const [projects, setProjects] = useState(fallbackProjects);
  const [source, setSource] = useState("local");

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Bad response");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setProjects(data);
          setSource("api");
        }
      })
      .catch(() => {
        // Backend not running — fallback data already set.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id={id} className="section">
      <h2 className="section-heading">Projects</h2>
      {source === "local" && (
        <p className="projects-note">
          Showing local sample data — start the backend to load live project data from the API.
        </p>
      )}
      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-row" key={p.id}>
            <div className="project-row-top">
              <h3>{p.title}</h3>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-summary">{p.summary}</p>
            <p className="project-metric">{p.metric}</p>
            <div className="project-stack">
              {p.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
