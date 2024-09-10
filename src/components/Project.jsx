import { Link } from "react-router-dom";

function Project({ name, link, BG }) {
  return (
    <div className="one-project">
      <Link to={link} className="link">
        <div className={BG}>
          <p className="project-link">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
