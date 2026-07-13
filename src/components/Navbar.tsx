import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav>
      <h2>Jeel Patel</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;