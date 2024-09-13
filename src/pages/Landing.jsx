import { Link } from "react-router-dom";
import mixtape from "/images/mixtape.jpg";
import LatestNews from "../components/LatestNews";
import wilm from "/images/Home-WilmingtonReconstructedrep.jpg";
import opioid from "/images/opioid-proj.jpg";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-teaser">
        <span className="home-teaser-header">MoB THEATRE COMPANY</span>
        <p className="teaser-blurb">Theatre Makers on a Mission</p>
        <div className="home-teaser-link">
          {/* <a href="/about">
            <button className="teaser-button">
              THEATRE MAKERS ON A MISSION
            </button>
          </a> */}
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
