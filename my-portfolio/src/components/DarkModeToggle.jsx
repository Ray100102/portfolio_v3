import "../styles/components/DarkModeToggle.css";
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div
      className="theme-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <Within
        duration={750}
        toggled={darkMode}
        className={`within-toggle ${darkMode ? "dark" : "light"}`}
      />
    </div>
  );
}

export default DarkModeToggle;