import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <div className="how-to-involved">
        <p>
          Visit our{" "}
          <Link to="/scotopia" className="link">
            Scotopia Festival Page
          </Link>{" "}
          for tickets to the March 2025 event!
        </p>
        <br></br>
        <p>Check back here for tickets to upcoming projects!</p>
      </div>
    </div>
  );
}

export default Contact;
