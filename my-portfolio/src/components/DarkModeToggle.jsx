import "../styles/components/DarkModeToggle.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`dark-mode-button${darkMode ? " dark" : ""}`}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? (
        <img src={moon} alt="Dark mode" className="dark-mode-icon" />
      ) : (
        <img src={sun} alt="Light mode" className="dark-mode-icon" />
      )}
    </button>
  );
}

export default DarkModeToggle;