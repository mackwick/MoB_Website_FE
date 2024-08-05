import image from "/images/placeholder.jpeg";
import LatestNews from "../components/LatestNews";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-about">
        <div className="brief-bio">
          Mouths of Babes Theatre is dedicated to creating engaging,
          interesting, and smart theatre for actors and audiences in high school
          and college. We use forms of devising theatre to explore and
          investigate issues we care about: engagement, risk, advocacy. Learn
          more about our mission. [LINK TO ABOUT]
          <button>[LINK TO DONATE]</button>
        </div>
        <div className="landing-bio-image">
          <img src={image} className="landing-top-image" />
        </div>
      </div>

      <div className="landing-teaser">
        <p>
          [REPLACE WITH SCOTOPIA FLYER AND/OR INFO ABOUT SCOTOPIA & LINK TO
          SCOTOPIA PAGE]
        </p>
      </div>
      <div className="latest-news">
        <div className="news-item">
          <LatestNews
            image={image}
            title={"2024 Fundraiser"}
            blurb={"Date and Time TBD"}
            link={"https://www.mouthsofbabestheatre.com/tickets"}
          />
        </div>
        <div className="news-item">
          <LatestNews
            image={image}
            title={"Voices from the Opioid Epidemic"}
            blurb={
              "Our current developing project, Voices from the Opioid Epidemic highlights the stories of those in our community impacted by overdose and addiction, be it personally or with someone they love."
            }
            link={"https://www.mouthsofbabestheatre.com/current-projects"}
          />
        </div>
        <div className="news-item">
          <LatestNews
            image={image}
            title={"YouthQuake"}
            blurb={
              "In December 2023, two of MoB's artistic associates partnered with PeaceRose Montessori School to teach the upper-elementary kids about Social Justice through Theatre."
            }
            link={"https://www.mouthsofbabestheatre.com/gallery"}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
