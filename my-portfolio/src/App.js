import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Loading from "./sections/Loading";
import NavBar from "./components/NavBar";
import HomeScreen from "./sections/HomeScreen";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

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

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 2000); // 2-second delay
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
    <div className={`App-theme ${darkMode ? "dark" : "light"}`}>
      <div id="home" className="App">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HomeScreen />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
