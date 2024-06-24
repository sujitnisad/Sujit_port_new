import "./Projects.css";
import Work from "./Work";
const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <Work />
    </section>
  );
};

export default Projects;
