import { Link } from "react-router-dom";
import image from "/images/placeholder.jpeg";
import LatestNews from "../components/LatestNews";
import wilm from "/images/Home-WilmingtonReconstructedrep.jpg";
import opioid from "/images/opioid-proj.jpg";

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
            <Link to="/about">
              <button className="learn-more-button home-bio-one-link">
                Learn More
              </button>
            </Link>
            <a href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY">
              {" "}
              <button className="home-bio-one-link">Support MoB</button>
            </a>
          </div>
        </div>
        <div className="landing-video">
          <img src={image} className="video-placeholder"></img>
        </div>
      </div>

      <div className="landing-teaser">
        <span className="home-teaser-header">EXPERIENCE SCOTOPIA</span>
        <p className="teaser-blurb">
          MoB Theatre's annual original theatre festival that inspires the
          search for light within darkness - for audiences and artists alike.
        </p>
        <div className="home-teaser-link">
          <a href="">
            <button className="teaser-button">GET TICKETS</button>
          </a>
        </div>
      </div>
      <div className="latest-news">
        <LatestNews
          image={image}
          title={"2024 Fundraiser: MoB Mixtape"}
          blurb={
            "Join us Sept. 25th for a community arts and crafts night, with live music and karaoke, will have you making meaningful art and connections with your community, all while tapping your foot along to some epic live tunes."
          }
          link={"https://www.mouthsofbabestheatre.com/tickets"}
        />

        <LatestNews
          image={opioid}
          title={"Voices from the Opioid Epidemic"}
          blurb={
            "Our current developing project, Voices from the Opioid Epidemic highlights the stories of those in our community impacted by overdose and addiction, be it personally or with someone they love."
          }
          link={"https://www.mouthsofbabestheatre.com/current-projects"}
        />

        <LatestNews
          image={wilm}
          title={"Wilmington Reconstructed"}
          blurb={
            "Wilmington Reconstructed is a documentary style play about the events that led up to the 1898 massacre and coup-d'etat fueled by white supremacy and hate in our city. It investigates the dire consequences of Black erasure and is a vital MoB piece."
          }
          link={"https://www.mouthsofbabestheatre.com/gallery"}
        />
      </div>
    </div>
  );
}

export default Landing;
