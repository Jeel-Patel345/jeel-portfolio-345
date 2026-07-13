import React, { useRef } from "react";
import "../styles/projects.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/* ---- Tilt hook ---- */
function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return { ref, handleMouseMove, handleMouseLeave };
}

function ProjectCard({ children }: { children: React.ReactNode }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();
  return (
    <div
      ref={ref}
      className="project-card tilt-card fade-up"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="projects"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>My Projects</h2>

      <div className={`project-container ${visible ? "grid-visible" : ""}`}>

        {/* PassGuard */}
        <ProjectCard>
          <div className="project-title">
            <span className="icon">🛡️</span>
            <h3>PassGuard</h3>
          </div>

          <p>
            AI-powered phishing detection tool that analyzes suspicious URLs
            using WHOIS, DNS Lookup, SSL Certificate validation, VirusTotal API
            and Google Safe Browsing.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>FastAPI</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Jeel-Patel345/passguard" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="https://passguard-jeel-12.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>
        </ProjectCard>

        {/* NeonShield */}
        <ProjectCard>
          <div className="project-title">
            <span className="icon">🛡️</span>
            <h3>NeonShield</h3>
          </div>

          <p>
            AI-powered Phishing URL &amp; Domain Analyzer that detects malicious
            websites using WHOIS, DNS, SSL Certificate analysis, VirusTotal,
            and Google Safe Browsing APIs.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>WHOIS</span>
            <span>DNS</span>
            <span>SSL</span>
            <span>VirusTotal</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Jeel-Patel345/phishing-analyzer" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href="https://phishing-analyzer-three.vercel.app" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>
        </ProjectCard>

      </div>

    </section>
  );
}

export default Projects;
