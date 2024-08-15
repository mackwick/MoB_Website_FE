import { Link } from "react-router-dom";
import image from "/images/placeholder.jpeg";
import LatestNews from "../components/LatestNews";
import verticalPic from "/images/home-vert4.jpg";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-about">
        <div className="brief-bio">
          MOUTHS OF BABES creates theatre that explores and questions complex
          intersectional, community related issues, examining both their
          underlying causes and their consequences. Our goal is to curate a
          theatre-going experience that empowers audience members to reflect on
          their community to promote healing, growth, and engagement.
          <div className="home-bio-links">
            <button>
              <Link to="/about" className="link button-link">
                Learn More
              </Link>{" "}
            </button>
            <button>Support MoB</button>
          </div>
        </div>
        {/* <div className="landing-bio-image">
          <img src={verticalPic} className="landing-top-image" />
        </div> */}
      </div>

      <div className="landing-teaser">
        <span className="home-teaser-header">EXPERIENCE SCOTOPIA</span>
        <p>
          MoB Theatre's annual original theatre festival that inspires the
          search for light within darkness - for audiences and artists
          alike.[LINK TO SCOTOPIA PAGE]
        </p>
      </div>
      <div className="latest-news">
        <div className="news-item">
          <LatestNews
            image={image}
            title={"2024 Fundraiser: MoB Mixtape"}
            blurb={
              "Join us Sept. 25th for a community arts and crafts night, with live music and karaoke, will have you making meaningful art and connections with your community, all while tapping your foot along to some epic live tunes."
            }
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
