import "../styles/sections/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3>SDE - AMEX GBT</h3>
            <span>Feburary 2025 – Present</span>
            <p>
              Building responsive web applications with React, improving UI/UX,
              and collaborating with designers and backend engineers.
            </p>
          </div>
          <div className="experience-item">
            <h3>Software Engineer Intern — Simsola</h3>
            <span>Summer 2022</span>
            <p>
              Developed new features for a SaaS platform, wrote unit tests, and
              participated in agile sprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
