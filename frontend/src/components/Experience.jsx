import { experience } from "../data/content.js";

export default function Experience({ id }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">Experience</h2>
      <ol className="timeline">
        {experience.map((item) => (
          <li className="timeline-item" key={`${item.role}-${item.org}`}>
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-content">
              <h3>
                {item.role} <span className="timeline-org">— {item.org}</span>
              </h3>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
