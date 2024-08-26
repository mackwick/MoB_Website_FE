function Engagement({ image, name, details }) {
  return (
    <div className="one-engagement">
      <div className="engage-one">
        <img src={image} className="engage-tease-image" />
      </div>
      <div className="engage-two">
        <h3>{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Engagement;
