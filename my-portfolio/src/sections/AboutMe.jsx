import "../styles/sections/AboutMe.css";
import tempProfilePic from "../assets/temppfp.jpg";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src={tempProfilePic} alt="Profile" className="profile-pic" />
          <div className="about-text">
            <p>
              Hi, I'm Ray Guo — a developer passionate about building
              user-centered software experiences. I enjoy solving real-world
              problems with clean code, thoughtful design, and modern web
              technologies.
            </p>
            <p>
              My interests include front-end development, UI/UX, and learning
              new frameworks. When I'm not coding, I love piano, reading, and
              the gym!
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-grid">
            <div className="skill-box">
              <img src={tempProfilePic} alt="Skill 1" className="skill-icon" />
            </div>
            <div className="skill-box">
              <img src={tempProfilePic} alt="Skill 2" className="skill-icon" />
            </div>
            <div className="skill-box">
              <img src={tempProfilePic} alt="Skill 3" className="skill-icon" />
            </div>
            <div className="skill-box">
              <img src={tempProfilePic} alt="Skill 4" className="skill-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
