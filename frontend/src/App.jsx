import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("intro");

  // Theme Management
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    });

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout">
      <Sidebar
        sections={SECTIONS}
        active={active}
        onNavigate={setActive}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main" id="main">
        <Hero id="intro" />
        <About id="about" />
        <Skills id="skills" />
        <Education id="education" />
        <Certifications id="certifications" />
        <Projects id="projects" />
        <Contact id="contact" />
        <footer className="footer">
          <span>&copy; {new Date().getFullYear()} Banala Naga Bala Chandra Sekhar Kumar. Built with React &amp; FastAPI.</span>
        </footer>
      </main>
    </div>
  );
}
