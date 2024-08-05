function Team({ image, name, bio, title }) {
  return (
    <div className="team-bio">
      <div className="bio-subdiv">
        <img src={image} className="team-bio-pic" />
      </div>
      <div className="bio-subdiv">
        <h4>{name}</h4>
        <p>
          <i>{title}</i>
        </p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Team;
