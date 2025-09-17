import "../styles/sections/AboutMe.css";
import tempProfilePic from "../assets/temppfp.jpg";
import react from "../assets/logos/react.png";
import ts from "../assets/logos/ts.png";
import js from "../assets/logos/js.png";
import py from "../assets/logos/python.png";
import dd from "../assets/logos/datadog.webp";
import jv from "../assets/logos/java.webp";

import { Model } from "../models/Rayquaza.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const skills = [
  { id: 1, name: "Skill 1", image: react },
  { id: 2, name: "Skill 2", image: ts },
  { id: 3, name: "Skill 3", image: js },
  { id: 4, name: "Skill 4", image: jv },
  { id: 5, name: "Skill 5", image: py },
  { id: 6, name: "Skill 6", image: dd },
  { id: 7, name: "Skill 7", image: tempProfilePic },
  { id: 8, name: "Skill 8", image: tempProfilePic },
  { id: 9, name: "Skill 9", image: tempProfilePic },
  { id: 10, name: "Skill 10", image: tempProfilePic },
  { id: 11, name: "Skill 11", image: tempProfilePic },
  { id: 12, name: "Skill 12", image: tempProfilePic },
];

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src={tempProfilePic} alt="Profile" className="profile-pic" />
          <div className="about-text">
            <p>
              Hi, I'm Ray Guo — a developer passionate about building
              user-centered software experiences. I enjoy solving real-world
              problems with clean code, thoughtful design, and modern web
              technologies.
            </p>
            <p>
              My interests include front-end development, UI/UX, and learning
              new frameworks. When I'm not coding, I love piano, reading, and
              the gym!
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="canvas-container">
            <Canvas camera={{ position: [30, 20, 20], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-box" key={skill.id}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
