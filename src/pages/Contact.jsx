import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-h2">GET INVOLVED</h2>
      </div>

      <div className="how-to-involved">
        <div className="how-to-div1">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              {" "}
              Phone:{" "}
              <a href="tel:9103675286" className="link">
                910-367-5286
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:mouthsofbabestheatre@gmail.com"
                className="link"
                target="_blank"
              >
                mouthsofbabestheatre@gmail.com
              </a>
            </li>
          </ul>

          <h4>FOLLOW US</h4>
          <ul>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/mobtheatre/"
                className="link"
                target="_blank"
              >
                @mobtheatre
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/MoBTheatreCompany/"
                className="link"
                target="_blank"
              >
                MoB Theatre Company
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a
                href="https://www.youtube.com/channel/UCplIp7V5VNQDvq00an61NcQ"
                className="link"
                target="_blank"
              >
                MoB Theatre and Media
              </a>
            </li>
          </ul>

          <h4>DONATE</h4>
          <ul>
            <li>
              On{" "}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY"
                className="link"
                target="_blank"
              >
                PayPal
              </a>
            </li>
            <li>On IndieGoGo (Coming Fall 2024)</li>
            <li>
              At a{" "}
              <Link to="" className="link">
                fundraiser
              </Link>{" "}
              or{" "}
              <Link to="/projects" className="link">
                event
              </Link>
            </li>
          </ul>
        </div>
        <div className="how-to-div2">
          <h4>ATTEND AN EVENT</h4>
          <ul>
            <li>
              <a
                href="https://events.humanitix.com/mob-mixtape-an-arts-night-out"
                target="_blank"
                className="link"
              >
                Sept. 25 in Wilmington - MoB MixTape: Arts Night Out
              </a>
            </li>
            <li>Ticketing platform coming soon</li>
          </ul>

          <h4>AUDITION</h4>
          <p>
            Email us (info above and below) if you're interested in
            participating in an upcoming project! You can also follow us on
            social media, where we announce upcoming auditions.
          </p>
          <h4>ETC.</h4>
          <p>
            If you are not local to North Carolina, but still wish to engage
            with MoB, follow us on our social media. We often post when we are
            seeking interviews for our documentary productions, which is a
            unique opportunity MoB offers to become involved in our productions!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
