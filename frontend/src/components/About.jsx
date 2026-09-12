import { about } from "../data/content.js";

export default function About({ id }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">About</h2>
      <div className="about-body">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
