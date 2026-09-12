import { skills } from "../data/content.js";

export default function Skills({ id }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
