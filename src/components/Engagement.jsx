function Engagement({ image, name, details }) {
  return (
    <div className="one-project">
      <img src={image} className="project-tease-image" />
      <h3>{name}</h3>
      <p>{details}</p>
    </div>
  );
}

export default Engagement;
