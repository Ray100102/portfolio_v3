import "../styles/components/DarkModeToggle.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="dark-mode-slider" onClick={() => setDarkMode((prev) => !prev)}>
      <div className={`slider-track${darkMode ? " dark" : ""}`}>
        <div className={`slider-thumb${darkMode ? " dark" : ""}`}>
          {darkMode ? (
            <img src={moon} alt="Dark mode" className="slider-icon" />
          ) : (
            <img src={sun} alt="Light mode" className="slider-icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DarkModeToggle;