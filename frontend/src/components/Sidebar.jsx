import { profile } from "../data/content.js";

export default function Sidebar({ sections, active, onNavigate }) {
  const handleClick = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-identity">
        <a href="#intro" onClick={handleClick("intro")} className="sidebar-name">
          {profile.name}
        </a>
        <p className="sidebar-role">{profile.role}</p>
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={handleClick(s.id)}
                className={active === s.id ? "is-active" : ""}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
