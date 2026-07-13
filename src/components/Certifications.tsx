import React from "react";
import "../styles/certifications.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Certifications() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      className="certifications"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>Certifications</h2>

      <p className={`certification-text fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "80ms" }}>
        Certifications and training that strengthen my knowledge in
        Cyber Security, Networking, Cloud Computing, and Software Development.
      </p>

      <div className={`certificate-container ${visible ? "grid-visible" : ""}`}>

        <div className="certificate-card fade-up">
          <h3>🌐 CCNA</h3>
          <p>Cisco Certified Network Associate</p>
        </div>

        <div className="certificate-card fade-up">
          <h3>☁️ AWS</h3>
          <p>AWS Cloud (Learning)</p>
        </div>

        <div className="certificate-card fade-up">
          <h3>🖥️ MCSA</h3>
          <p>Microsoft Certified Solutions Associate</p>
        </div>

        <div className="certificate-card fade-up">
          <h3>🛡️ Cyber Security</h3>
          <p>Cyber Security Training Program</p>
        </div>

        <div className="certificate-card fade-up">
          <h3>💻 Hardware &amp; Networking</h3>
          <p>Computer Hardware and Networking</p>
        </div>

        <div className="certificate-card fade-up">
          <h3>🐍 Python</h3>
          <p>Python Programming</p>
        </div>

      </div>

    </section>
  );
}

export default Certifications;