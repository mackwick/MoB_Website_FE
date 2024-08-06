import Project from "../components/Project";
import Engagement from "../components/Engagement";

function Projects() {
  return (
    <div className="projects-container">
      <div className="current-projects">
        <h3>Current Projects</h3>
        <Project image={""} name={""} link={""} />
      </div>
      <div className="engagements-div">
        <h3>Events & Engagement</h3>
        <Engagement image={""} name={""} details={""} />
      </div>
      <div className="previous-works">
        <h3>Previous Works</h3>
        <Project image={""} name={""} link={""} />
      </div>
    </div>
  );
}

export default Projects;
