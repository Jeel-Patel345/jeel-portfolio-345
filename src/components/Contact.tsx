import React from "react";
import "../styles/contact.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contacts = [
  {
    icon: "📧",
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=pateljeelm0304@gmail.com",
    subtitle: "",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeel-patel-a1a21a281",
    subtitle: "",
  },
  {
    icon: "💻",
    label: "GitHub",
    href: "https://github.com/Jeel-Patel345",
    subtitle: "",
  },
  {
    icon: "📍",
    label: "Location",
    href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
    subtitle: "Ahmedabad, Gujarat, India",
  },
];

function Contact() {
  const { ref, visible } = useScrollAnimation();

  const handleDoubleClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="contact"
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`fade-up ${visible ? "visible" : ""}`}>Contact Me</h2>

      <p className={`contact-text fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "80ms" }}>
        I'm always open to internships, freelance opportunities, project collaborations,
        and cybersecurity discussions. Feel free to connect with me.
      </p>

      <div className={`contact-container ${visible ? "grid-visible" : ""}`}>
        {contacts.map(({ icon, label, href, subtitle }) => (
          <div
            key={label}
            className="contact-card fade-up"
            onClick={() => handleDoubleClick(href)}
            title={`Click to open ${label}`}
          >
            <span className="contact-icon">{icon}</span>
            <h3>{label}</h3>
            {subtitle && <p className="contact-subtitle">{subtitle}</p>}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Contact;