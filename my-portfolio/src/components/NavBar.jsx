import { useEffect, useState } from "react";
import "../styles/components/NavBar.css";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../assets/temppfp.jpg";
import li from "../assets/logos/linkedin.png";
import git from "../assets/logos/gitNav.webp";
import Dude from "../models/Dude";

function NavBar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <a href="#home" className="navbar-logo">
          <Dude></Dude>
        </a>
        <ul className="navbar-links left-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>

      <ul className="navbar-links right-links">
        <li>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ray-g-903ab8200/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-logo"
          >
            <img src={li} alt="LinkedIn" className="logo-box" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ray100102"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-logo"
          >
            <img src={git} alt="GitHub" className="logo-box" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
