import "../styles/components/DarkModeToggle.css";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default DarkModeToggle;
