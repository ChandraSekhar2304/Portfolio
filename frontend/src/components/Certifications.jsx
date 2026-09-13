import { certifications } from "../data/content.js";

export default function Certifications({ id }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">Certifications &amp; Highlights</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <div className="cert-card-header">
              <span className="cert-badge">{cert.badge}</span>
              <span className="cert-year">{cert.year}</span>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-description">{cert.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
