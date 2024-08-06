function Team({ image, name, bio, title }) {
  return (
    <div className="team-bio">
      <div className="bio-subdiv">
        <img src={image} className="team-bio-pic" />
      </div>
      <div className="bio-subdiv">
        <p>{name}</p>
        <p>
          <i>{title}</i>
        </p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Team;
