import { Link } from "react-router-dom";
import mixtape from "/images/mixtape.jpg";
import LatestNews from "../components/LatestNews";
import wilm from "/images/Home-WilmingtonReconstructedrep.jpg";
import opioid from "/images/opioid-proj.jpg";
import Project from "../components/Project";

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
      <div className="latest-news project-teasers-div">
        <Project
          name={"2024 Fundraiser: MoB Mixtape"}
          link={"https://events.humanitix.com/mob-mixtape-an-arts-night-out"}
          BG={"mixtape proj-compon-BG"}
        />
        <Project
          name={"Voices from the Opioid Epidemic"}
          link={"/opioidvoices"}
          BG={"opioid proj-compon-BG"}
        />

        <Project
          name={"Wilmington Reconstructed"}
          link={"/wilmingtonreconstructed"}
          BG={"wilmy proj-compon-BG"}
        />

        {/* <LatestNews
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
        /> */}
      </div>
    </div>
  );
}

export default Landing;
