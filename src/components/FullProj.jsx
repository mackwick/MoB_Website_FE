import { Link } from "react-router-dom";

function FullProj({ image, name, details }) {
  return (
    <div className="full-project-page">
      <div className="projects-header">
        <h2>PROJECTS</h2>
      </div>
      <div className="full-project-container">
        <div className="full-proj-one">
          <h3 className="full-project-header">{name}</h3>
          <img src={image} />
        </div>
        <div className="full-proj-two">
          <p>{details}</p>
          <div className="home-bio-links">
            <a href="/projects">
              <button className="learn-more-button home-bio-one-link">
                Go Back
              </button>
            </a>
            <a href="">
              {" "}
              <button className="home-bio-one-link">Get Tickets</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullProj;
