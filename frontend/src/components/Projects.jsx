import { useEffect, useState } from "react";
import { API_BASE, projects as initialProjects } from "../data/content.js";

export default function Projects({ id }) {
  const [projectList, setProjectList] = useState(initialProjects);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          // Merge API data with frontend content taking precedence
          setProjectList((prev) => {
            const apiMerged = data.map((apiItem) => {
              const matched = prev.find((p) => p.id === apiItem.id) || {};
              return { ...apiItem, ...matched };
            });
            const localOnly = prev.filter(
              (p) => !data.some((apiItem) => apiItem.id === p.id)
            );
            return [...apiMerged, ...localOnly];
          });
        }
      })
      .catch(() => {
        // Silently use rich local project data without showing any developer disclaimers
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id={id} className="section">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="projects-list">
        {projectList.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-card-header">
              <div className="project-meta-left">
                {p.category && <span className="project-category">{p.category}</span>}
                <h3 className="project-title">{p.title}</h3>
              </div>
              <span className="project-year">{p.year}</span>
            </div>

            <p className="project-summary">{p.summary}</p>

            {p.pipeline && (
              <div className="project-pipeline-box">
                <span className="project-pipeline-label">Pipeline Architecture:</span>
                <span className="project-pipeline-flow">{p.pipeline}</span>
              </div>
            )}

            {p.metric && (
              <div className="project-metric-banner">
                <span className="metric-icon" aria-hidden="true">📈</span>
                <span className="metric-text">{p.metric}</span>
              </div>
            )}

            <div className="project-stack">
              {p.stack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {p.link && (
                <a
                  className="project-action-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  View Code on GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
