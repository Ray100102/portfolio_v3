import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import Loading from "./sections/Loading";
import NavBar from "./components/NavBar";
import HomeScreen from "./sections/HomeScreen";
import AboutMe from "./sections/AboutMe";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particleOptions from "./models/particles.config.json";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700);
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [init, setInit] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    journey: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 700);
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const particlesLoaded = (container) => {};

  if (isLoading) {
    return <Loading />;
  }

  if (!isDesktop) {
    return (
      <div className={`App${darkMode ? ".dark" : ""}`}>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          This portfolio is best viewed on a desktop (width ≥ 1000px). Please
          switch to a desktop device.
        </div>
      </div>
    );
  }

  return (
    <div className={`App-theme ${darkMode ? "dark" : "light"}`}>
      {/* {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%" }}
        />
      )} */}
      <div id="home" className="App">
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
        />
        <HomeScreen ref={sectionsRef.home} />
        <AboutMe ref={sectionsRef.about} />
        <Journey ref={sectionsRef.journey} />
        <Projects ref={sectionsRef.projects} />
        <Contact ref={sectionsRef.contact} />
      </div>
    </div>
  );
}

export default App;
