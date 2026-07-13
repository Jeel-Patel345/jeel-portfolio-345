import React from "react";
import "../styles/skills.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="skills"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>My Skills</h2>

      <div className="skills-category">

        <h3 className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "80ms" }}>
          🔐 Cyber Security
        </h3>
        <div className={`skills-grid ${visible ? "grid-visible" : ""}`}>
          <div className="skill-card fade-up">🔒 Cyber Security</div>
          <div className="skill-card fade-up">🛡️ Ethical Hacking</div>
          <div className="skill-card fade-up">🌐 Network Security</div>
          <div className="skill-card fade-up">🔍 Vulnerability Assessment</div>
          <div className="skill-card fade-up">🧪 Penetration Testing</div>
          <div className="skill-card fade-up">🔐 Web Security</div>
        </div>

        <h3 className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          🌐 Networking
        </h3>
        <div className={`skills-grid ${visible ? "grid-visible" : ""}`}>
          <div className="skill-card fade-up">🌍 CCNA</div>
          <div className="skill-card fade-up">📡 Computer Networking</div>
          <div className="skill-card fade-up">🔌 TCP/IP</div>
          <div className="skill-card fade-up">📶 Routing &amp; Switching</div>
          <div className="skill-card fade-up">🖥️ DNS</div>
          <div className="skill-card fade-up">📨 DHCP</div>
        </div>

        <h3 className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "120ms" }}>
          ☁️ Cloud
        </h3>
        <div className={`skills-grid ${visible ? "grid-visible" : ""}`}>
          <div className="skill-card fade-up">🪣 AWS S3</div>
          <div className="skill-card fade-up">⚙️ AWS EC2</div>
          <div className="skill-card fade-up">🔑 AWS IAM</div>
        </div>

        <h3 className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "140ms" }}>
          🖥️ Hardware &amp; System Administration
        </h3>
        <div className={`skills-grid ${visible ? "grid-visible" : ""}`}>
          <div className="skill-card fade-up">🖥️ Computer Hardware</div>
          <div className="skill-card fade-up">🔧 Hardware Troubleshooting</div>
          <div className="skill-card fade-up">💽 OS Installation</div>
          <div className="skill-card fade-up">🪟 Windows Server (MCSA)</div>
        </div>

        <h3 className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "160ms" }}>
          💻 Programming &amp; Development
        </h3>
        <div className={`skills-grid ${visible ? "grid-visible" : ""}`}>
          <div className="skill-card fade-up">🐍 Python</div>
          <div className="skill-card fade-up">⚛️ React</div>
          <div className="skill-card fade-up">🌐 HTML5</div>
          <div className="skill-card fade-up">🎨 CSS3</div>
          <div className="skill-card fade-up">📜 JavaScript</div>
          <div className="skill-card fade-up">🚀 FastAPI</div>
          <div className="skill-card fade-up">🗄️ SQL</div>
          <div className="skill-card fade-up">💻 Git &amp; GitHub</div>
        </div>

      </div>
    </section>
  );
}

export default Skills;