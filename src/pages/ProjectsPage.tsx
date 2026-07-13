import projects from "../data/projects";
import "../styles/projectsPage.css";
import Navbar from "../components/Navbar";

interface ProjectsPageProps {
  goHome: () => void;
}

function ProjectsPage({ goHome }: ProjectsPageProps) {
  return (
    <div className="projects-page">
      <Navbar />

      {/* ── Banner ── */}
      <div className="projects-page-hero">
        <h1>My <span>Projects</span></h1>
        <p>
          A detailed look at what I've built — the problems solved,
          technologies used, and features shipped.
        </p>
      </div>

      {/* ── Project detail cards ── */}
      <div className="projects-detail-list">
        {projects.map((project) => (
          <div className="project-detail-card" key={project.id}>

            {/* Header strip */}
            <div className="project-detail-header">
              <div className="project-detail-title">
                <span className="project-detail-icon">{project.icon}</span>
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.tagline}</p>
                </div>
              </div>
              <span className="project-status">{project.status}</span>
            </div>

            {/* Body */}
            <div className="project-detail-body">

              {/* About */}
              <div className="project-about">
                <h3>📖 About</h3>
                <p>{project.longDescription}</p>
              </div>

              {/* Tech stack */}
              <div className="project-tech">
                <h3>🛠️ Tech Stack</h3>
                <div className="tech-pills">
                  {project.techStack.map((tech) => (
                    <span className="tech-pill" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="project-features">
                <h3>✨ Key Features</h3>
                <div className="features-grid">
                  {project.features.map((feature, i) => (
                    <div className="feature-item" key={i}>
                      <span className="feature-dot" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer buttons */}
            <div className="project-detail-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn-github"
              >
                🐙 View on GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn-live"
              >
                🚀 Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* ── Bottom Go to Home ── */}
      <div className="projects-page-bottom">
        <button className="back-btn" onClick={goHome}>
          ← Go to Home
        </button>
      </div>

    </div>
  );
}

export default ProjectsPage;
