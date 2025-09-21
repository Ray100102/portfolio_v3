import React from "react";
import { Canvas } from "@react-three/fiber"; // Import Canvas for Three.js rendering
import { Model as RayquazaModel } from "../models/Rayquaza"; // Importing the Rayquaza model

import "../styles/sections/HomeScreen.css";

function HomeScreen() {
  return (
    <section id="home" className="home-section">
      <div className="home-model">
        <Canvas camera={{ position: [10, 0, 20] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <RayquazaModel position={[0, -8, 0]} />
        </Canvas>
      </div>
      <div className="home-content">
        <h1>Welcome!! This is just placeholder text</h1>
        <p>I really don't know if I want this / what model to have here</p>
      </div>
    </section>
  );
}

export default HomeScreen;
