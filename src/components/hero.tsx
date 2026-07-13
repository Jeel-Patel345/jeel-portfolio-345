import { useEffect, useRef, useState } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.png";
import { useCounter } from "../hooks/useCounter";

interface HeroProps {
  goToProjects: () => void;
}

/* ---- Typing Effect ---- */
const TITLES = [
  "Cybersecurity Learner",
  "Network Security",
  "Hardware Troubleshooting",
];

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TITLES[titleIdx];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        75
      );
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, titleIdx]);

  return (
    <h2 className="typing-text">
      {displayed}
      <span className="cursor">|</span>
    </h2>
  );
}

/* ---- Stat Counter ---- */
function StatCounter({ target, label, start, isText = false }: { target: string; label: string; start: boolean, isText?: boolean }) {
  const value = isText ? target : useCounter(target, 1600, start);
  return (
    <div className={`stat ${start ? 'animate-in' : ''}`}>
      <span className={isText ? "stat-text" : "stat-num"}>{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Hero({ goToProjects }: HeroProps) {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Hero is always visible on mount
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Subtle Grid Background */}
      <div className="hero-grid-bg"></div>

      {/* ---- Left column ---- */}
      <div className={`hero-left ${heroVisible ? "visible" : ""}`}>
        <div className="hero-greeting">
          <h3>Hello, I'm</h3>
        </div>

        <h1>Jeel Patel</h1>

        <TypingText />

        <p>
          I am a Cyber Security undergraduate passionate about Web Security,
          Network Security, and Secure Software Development. I enjoy building
          practical security tools like phishing detection systems while
          continuously learning ethical hacking, penetration testing, and
          modern security practices.
        </p>

        <div className="buttons-group">
          <div className="buttons">
            <a href="/sample (4).pdf" target="_blank" rel="noopener noreferrer">
              <button className="primary">Download Resume</button>
            </a>
            <button className="secondary" onClick={goToProjects}>View Projects</button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="hero-stats">
          <StatCounter target="5+" label="Projects" start={heroVisible} />
          <StatCounter target="3+" label="Certifications" start={heroVisible} />
        </div>
      </div>

      {/* ---- Right column ---- */}
      <div className={`hero-right ${heroVisible ? "visible" : ""}`}>
        <div className="profile-container">
          <div className="profile-glow"></div>
          <img src={profile} alt="Jeel Patel" className="profile-image" />


        </div>
      </div>
    </section>
  );
}

export default Hero;