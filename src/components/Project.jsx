import { Link } from "react-router-dom";

function Project({ image, name, link }) {
  return (
    <div className="one-project">
      <Link to={link}>
        <img src={image} className="project-tease-image" />
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

export default Project;
