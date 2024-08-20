function Team({ image, name, bio, title }) {
  return (
    <div className="team-bio">
      <div className="team-bio-one">
        <div className="bio-subdiv">
          <img src={image} className="team-bio-pic" />
        </div>
        <div className="bio-subdiv">
          <p className="bio-name">{name}</p>
          <p className="bio-name">
            <i>{title}</i>
          </p>
        </div>
      </div>
      <div className="team-bio-two">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Team;
