import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./styles/global.css";

type Page = "home" | "projects";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: string | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: "monospace", background: "#fff1f0" }}>
          <h2 style={{ color: "red" }}>💥 Error: {this.state.error}</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ---- Mouse Glow Blob ---- */
function MouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function Home({ goToProjects }: { goToProjects: () => void }) {
  return (
    <>
      <Navbar />
      <Hero goToProjects={goToProjects} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <MouseGlow />
        {page === "projects"
          ? <ProjectsPage goHome={() => setPage("home")} />
          : <Home goToProjects={() => setPage("projects")} />}
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
