function Board({ image, name, bio, title }) {
  return (
    <div className="board-bio">
      <div className="board-one">
        <p className="bio-name">{name}</p>
        <p className="bio-name board-title">
          <i>{title}</i>
        </p>
      </div>
      <div className="team-bio-two board-two">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Board;
