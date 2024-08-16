function LatestNews({ image, title, blurb, link }) {
  return (
    <div className="news-item">
      <img src={image} className="news-image" />
      <p>
        <b className="news-title">{title}</b> - {blurb}
        <br />
        <a href={link} className="link">
          Learn more.
        </a>
      </p>
    </div>
  );
}

export default LatestNews;
