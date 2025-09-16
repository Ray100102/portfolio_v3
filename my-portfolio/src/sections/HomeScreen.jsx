import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../styles/sections/HomeScreen.css";
import { Model } from "../components/model.jsx";

function HomeScreen() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>RAY GUO</h1>
        <p>
          Hi, I'm Ray, a developer with a passion for user-centered software.
        </p>
      </div>

      <div className="canvas-container">
        <Canvas camera={{ position: [30, 20, 20], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

export default HomeScreen;
