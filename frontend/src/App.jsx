import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("intro");

  return (
    <div className="layout">
      <Sidebar sections={SECTIONS} active={active} onNavigate={setActive} />
      <main className="main" id="main">
        <Hero id="intro" />
        <About id="about" />
        <Skills id="skills" />
        <Education id="education" />
        <Projects id="projects" />
        <Contact id="contact" />
        <footer className="footer">
          <span>Built with React &amp; FastAPI.</span>
        </footer>
      </main>
    </div>
  );
}
