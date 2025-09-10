import React, { useState, useEffect } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import HomeScreen from "./sections/HomeScreen";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  if (!isDesktop) {
    return (
      <div className={`App${darkMode ? ".dark" : ""}`}>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          This portfolio is best viewed on a desktop (width ≥ 1200px). Please
          switch to a desktop device.
        </div>
      </div>
    );
  }

  return (
    <div className={`App-theme${darkMode ? " dark" : " light"}`}>
      <div id="home" className={"App"}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HomeScreen />
        <section id="about" style={{ minHeight: "100vh", padding: "2rem 0" }}>
          <h2>About</h2>
          <p>Dummy content for About section.</p>
        </section>
        <section
          id="projects"
          style={{ minHeight: "100vh", padding: "2rem 0" }}
        >
          <h2>Projects</h2>
          <p>Dummy content for Projects section.</p>
        </section>
        <section id="skills" style={{ minHeight: "100vh", padding: "2rem 0" }}>
          <h2>Skills</h2>
          <p>Dummy content for Skills section.</p>
        </section>
        <section id="contact" style={{ minHeight: "100vh", padding: "2rem 0" }}>
          <h2>Contact</h2>
          <p>Dummy content for Contact section.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
