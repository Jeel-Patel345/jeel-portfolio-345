import React from "react";
import "../styles/education.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Education() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      className="education"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>Education</h2>

      <p className={`education-text fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "80ms" }}>
        My academic journey and continuous learning have built a strong
        foundation in Information Technology and Cyber Security.
      </p>

      <div className={`education-container ${visible ? "grid-visible" : ""}`}>
        <div className="education-card fade-up">
          <h3>🎓 Bachelor of Information Technology</h3>
          <p><strong>College:</strong> Shree Swaminarayan Institute of Technology, Gandhinagar</p>
          <p><strong>University:</strong> Gujarat Technological University (GTU)</p>
          <p><strong>Duration:</strong> 2023 - 2027</p>
          <p><strong>CGPA:</strong> 6.51 / 10.00 CPI</p>
        </div>
      </div>

    </section>
  );
}

export default Education;