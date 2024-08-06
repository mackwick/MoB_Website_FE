function Press({ source, blurb, link }) {
  return (
    <div className="press-div">
      <h6>{blurb}</h6>
      <a href={link}>
        <i>{source}</i>
      </a>
    </div>
  );
}

export default Press;
