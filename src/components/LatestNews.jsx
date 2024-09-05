function LatestNews({ image, title, link }) {
  return (
    <div className="news-item">
      <a href={link} className="link">
        <img src={image} className="news-image" />
        <p>
          <b className="news-title">{title}</b>
        </p>
      </a>
    </div>
  );
}

export default LatestNews;
