import image from "/images/placeholder.jpeg";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-about">
        <div className="brief-bio">
          Mouths of Babes Theatre is dedicated to creating engaging,
          interesting, and smart theatre for actors and audiences in high school
          and college. We use forms of devising theatre to explore and
          investigate issues we care about: engagement, risk, and advocacy.
          Learn more about our mission. [LINK TO ABOUT]
          <button>[LINK TO DONATE]</button>
        </div>
        <div className="landing-bio-image">
          <img src={image} className="landing-top-image" />
        </div>
      </div>

      <div className="landing-teaser">
        current project teaser and link with image/collage background
      </div>
      <div className="latest-news">
        <div className="news-item">
          three images with brief blurbs: projects, events or calls to action
        </div>
        <div className="news-item">
          three images with brief blurbs: projects, events or calls to action
        </div>
        <div className="news-item">
          three images with brief blurbs: projects, events or calls to action
        </div>
      </div>
    </div>
  );
}

export default Landing;
