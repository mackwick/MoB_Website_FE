function LatestNews({ image, title, blurb, link }) {
  return (
    <div>
      <img src={image} className="news-image" />
      <p>
        <b className="news-title">{title}</b> - {blurb}{" "}
        <a href={link}>Learn more.</a>
      </p>
    </div>
  );
}

export default LatestNews;
