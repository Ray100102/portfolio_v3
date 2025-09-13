import { useState } from "react";
import "../styles/sections/Experience.css";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // Track which box is open

  const experiences = [
    {
      title: "SDE - AMEX GBT",
      date: "February 2025 – Present",
      description:
        "Building responsive web applications with React, improving UI/UX, and collaborating with designers and backend engineers.",
    },
    {
      title: "Graduated From UW-Seattle",
      date: "December 2024",
      description: "Bacholers in CS, Philosophy Minor",
    },
    {
      title: "Simsola.ai — Software Engineer Intern",
      date: "Janurary - August 2024",
      description:
        "Developed and maintained responsive web applications, ensuring cross-browser compatibility and performance optimization.",
    },
    {
      title: "Began school at UW-Seattle",
      date: "Sept 2021",
      description: "Began",
    },
    {
      title: "I was born",
      date: "2002",
      description: "woah",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle box
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div
              className="timeline-dot"
              onClick={() => handleClick(index)} // Handle dot click
            ></div>
            {activeIndex === index && ( // Show box only if active
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span>{exp.date}</span>
                <p>{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
