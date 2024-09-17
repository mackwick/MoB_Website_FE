import { Link } from "react-router-dom";

function FullProj({ image, name, details }) {
  return (
    <div className="full-project-page">
      <h3 className="full-project-header">{name}</h3>
      <div className="full-project-container">
        <div className="full-proj-one">
          <img src={image} className="full-project-image" />
        </div>
        <div className="full-proj-two">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default FullProj;
