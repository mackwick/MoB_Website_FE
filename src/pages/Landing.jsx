import { Link } from "react-router-dom";
import mixtape from "/images/mixtape.jpg";
import LatestNews from "../components/LatestNews";
import wilm from "/images/Home-WilmingtonReconstructedrep.jpg";
import opioid from "/images/opioid-proj.jpg";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-about">
        {/* <div className="landing-video">
          <img src={image} className="video-placeholder"></img>
        </div> */}
        <div className="brief-bio">
          MOUTHS OF BABES creates theatre that explores and questions complex
          intersectional, community related issues, examining both their
          underlying causes and their consequences. Our goal is to curate a
          theatre-going experience that empowers audience members to reflect on
          their community to promote healing, growth, and engagement.
          <div className="home-bio-links">
            <Link to="/about">
              <button className="learn-more-button home-bio-one-link">
                Learn More
              </button>
            </Link>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY"
              target="_blank"
            >
              {" "}
              <button className="home-bio-one-link">Support MoB</button>
            </a>
          </div>
        </div>
      </div>

      <div className="landing-teaser">
        <span className="home-teaser-header">EXPERIENCE SCOTOPIA</span>
        <p className="teaser-blurb">
          MoB Theatre's annual original theatre festival that inspires the
          search for light within darkness - for audiences and artists alike.
        </p>
        <div className="home-teaser-link">
          <a href="/scotopia">
            <button className="teaser-button">LEARN MORE</button>
          </a>
        </div>
      </div>
      <div className="latest-news">
        <LatestNews
          image={mixtape}
          title={"2024 Fundraiser: MoB Mixtape"}
          link={"https://events.humanitix.com/mob-mixtape-an-arts-night-out"}
        />

        <LatestNews
          image={opioid}
          title={"Voices from the Opioid Epidemic"}
          link={"/opioidvoices"}
        />

        <LatestNews
          image={wilm}
          title={"Wilmington Reconstructed"}
          link={"/wilmingtonreconstructed"}
        />
      </div>
    </div>
  );
}

export default Landing;
