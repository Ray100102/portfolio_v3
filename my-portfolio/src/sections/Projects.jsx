import "../styles/sections/Projects.css";

function Projects() {
  const projects = [
    { title: "Various Personal Websites :)", interval: "" },
    { title: "IgniteDB", interval: "2024" },
    { title: "BattleCode 23", interval: "Jan 2023" },
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
