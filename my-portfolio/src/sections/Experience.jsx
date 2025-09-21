import "../styles/sections/Experience.css";

function Experience() {
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
      date: "January - August 2024",
      description:
        "Developed and maintained responsive web applications, ensuring cross-browser compatibility and performance optimization.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
            {index < experiences.length - 1 && (
              <hr className="timeline-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
