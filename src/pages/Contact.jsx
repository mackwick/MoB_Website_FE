import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <div className="how-to-involved">
        <p>
          Interested in auditioning, volunteering, or joining our mailing list?
        </p>
        <a
          href="mailto:mouthsofbabestheatre@gmail.com"
          className="link"
          target="_blank"
        >
          Email us at mouthsofbabestheatre@gmail.com.
        </a>

        <br></br>
        <br></br>
        <p>If you'd like to support MoB Theatre, you can</p>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY"
          className="link"
          target="_blank"
        >
          donate on PayPal.
        </a>
      </div>
    </div>
  );
}

export default Contact;
