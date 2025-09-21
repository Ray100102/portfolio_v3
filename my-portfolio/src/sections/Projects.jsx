import "../styles/sections/Projects.css";
import tempProjectImage from "../assets/temppfp.jpg";

function Projects() {
  const projects = [
    { title: "Project 1", interval: "January 2023 - June 2023" },
    { title: "Project 2", interval: "July 2023 - December 2023" },
    { title: "Project 3", interval: "January 2024 - June 2024" },
    { title: "Project 4", interval: "July 2024 - December 2024" },
  ];

  const handleArrowClick = () => {
    window.location.href = "/projects";
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.interval}</p>
            {index < projects.length - 1 && <hr className="project-divider" />}
          </div>
        ))}
      </div>
      <div className="projects-arrow" onClick={handleArrowClick}></div>
    </section>
  );
}

export default Projects;
