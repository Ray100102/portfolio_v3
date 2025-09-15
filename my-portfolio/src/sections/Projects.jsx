import "../styles/sections/Projects.css";
import tempProjectImage from "../assets/temppfp.jpg";

function Projects() {
  const projects = [
    { title: "Project 1", description: "Description for Project 1" },
    { title: "Project 2", description: "Description for Project 2" },
    { title: "Project 3", description: "Description for Project 3" },
    { title: "Project 4", description: "Description for Project 4" },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-gallery">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={tempProjectImage}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
