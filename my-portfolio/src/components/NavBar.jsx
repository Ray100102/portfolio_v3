import "../styles/components/NavBar.css";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
