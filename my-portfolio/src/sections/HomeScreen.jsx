import React from "react";
import { Canvas } from "@react-three/fiber";
import Hawks from "../assets/pics/hawks.jpg";
import { Model as RayquazaModel } from "../models/Rayquaza"; // Importing the Rayquaza model

import "../styles/sections/HomeScreen.css";

function HomeScreen() {
  return (
    <section id="home" className="home-section">
      <div className="home-top-left">
        <div className="home-text">Hey,</div>
        <div className="home-text-2">I'm Ray</div>
        <div className="home-subtitle">A Seattle✈️Chicago based developer</div>
      </div>
      <div className="home-right">
        <div className="home-picture">
          <img src={Hawks} alt="Hawks" />
        </div>
      </div>
      <div className="home-bottom-left">
        {/* <Canvas camera={{ position: [10, 0, 20] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <RayquazaModel position={[0, -8, 0]} />
        </Canvas> */}
      </div>
    </section>
  );
}

export default HomeScreen;
