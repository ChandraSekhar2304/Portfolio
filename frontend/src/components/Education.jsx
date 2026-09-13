import { education } from "../data/content.js";

export default function Education({ id }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">Education</h2>
      <ol className="timeline">
        {education.map((item) => (
          <li className="timeline-item" key={`${item.degree}-${item.institution}`}>
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
              {item.location && <span className="timeline-location">{item.location}</span>}
            </div>
            <div className="timeline-content">
              <h3>
                {item.degree} <span className="timeline-org">— {item.institution}</span>
              </h3>
              {item.details && item.details.length > 0 && (
                <ul>
                  {item.details.map((point, i) => (
                    <li key={i}>{point}</li>
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
