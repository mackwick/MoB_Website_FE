import { Link } from "react-router-dom";

function Project({ image, name, link }) {
  return (
    <div className="one-project">
      <Link to={link} className="link">
        <img src={image} className="project-tease-image" />
        <p className="project-link">{name}</p>
      </Link>
    </div>
  );
}

export default Project;
