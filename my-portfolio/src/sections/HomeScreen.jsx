import React from "react";
import { Canvas } from "@react-three/fiber";
import Hawks from "../assets/pics/hawks.jpg";
import { Model as RayquazaModel } from "../models/Rayquaza"; // Importing the Rayquaza model
import { Model as MercadesModel } from "../models/merc";
import { OrbitControls } from "@react-three/drei";

import "../styles/sections/HomeScreen.css";

function HomeScreen() {
  return (
    <section id="home" className="home-section">
      <div className="home-top-left">
        <div className="home-text">Hey,</div>
        <div className="home-text-2">I'm Ray</div>
        <div className="home-subtitle">
          Software Developer 🖥️ | Seattle ✈️ Chicago{" "}
        </div>
      </div>
      <div className="home-right">
        <div className="home-picture">
          <img src={Hawks} alt="Hawks" />
        </div>
      </div>
      <div className="home-bottom-left">
        {/* <Canvas camera={{ position: [0, 5, 15] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={30} />
          <group position={[0, -2, 0]}>
            <MercadesModel scale={[2, 2, 2]} />
          </group>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} target={[0, -2, 2]} />
        </Canvas> */}
      </div>
    </section>
  );
}

export default HomeScreen;
