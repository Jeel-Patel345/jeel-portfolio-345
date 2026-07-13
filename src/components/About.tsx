import React, { useRef } from "react";
import "../styles/about.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/* ---- Card Tilt ---- */
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
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return { ref, handleMouseMove, handleMouseLeave };
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();
  return (
    <div
      ref={ref}
      className="card tilt-card fade-up"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="about"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>About Me</h2>

      <p className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "80ms" }}>
        I am currently pursuing a Bachelor's in Information Technology.
        I am passionate about Cyber Security, ethical hacking,
        secure web development, and building real-world applications.
      </p>

      <div className={`about-cards ${visible ? "cards-visible" : ""}`}>
        <TiltCard>
          <h3>🎓 Education</h3>
          <p>Bachelor's in Information Technology</p>
        </TiltCard>

        <TiltCard>
          <h3>💻 Development</h3>
          <p>React, Python &amp; FastAPI</p>
        </TiltCard>

        <TiltCard>
          <h3>🔒 Security</h3>
          <p>Cyber Security &amp; Networking</p>
        </TiltCard>

        <TiltCard>
          <h3>🌱 Goal</h3>
          <p>Become a Security Engineer</p>
        </TiltCard>
      </div>
    </section>
  );
}

export default About;