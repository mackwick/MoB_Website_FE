function Engagement({ image, name, details }) {
  return (
    <div className="one-engagement">
      <div className="engage-one">
        <img src={image} className="engage-tease-image" />
        <h5>{name}</h5>
      </div>
      <div className="engage-two">
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Engagement;
