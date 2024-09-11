function Press({ source, blurb, link }) {
  return (
    <div className="press-div">
      <p className="press-blurb">{blurb}</p>
      <a href={link} className="link press-link" target="_blank">
        <i>{source}</i>
      </a>
    </div>
  );
}

export default Press;
