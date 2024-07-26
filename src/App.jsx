import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="under-construction">
        <h2>The Mouths of Babes site is undergoing some maintenance. </h2>
        <p>
          For now, you can find us on Instagram at{" "}
          <a href="https://www.instagram.com/mobtheatre/" className="links">
            @mobtheatre
          </a>{" "}
          and Facebook at{" "}
          <a
            href="https://www.facebook.com/MoBTheatreCompany"
            className="links"
          >
            Mouths of Babes Theatre Company
          </a>
          .
        </p>
        <p>
          You can also email us at{" "}
          <a href="mailto:mouthsofbabestheatre@gmail.com" className="links">
            mouthsofbabestheatre@gmail.com
          </a>
          .
        </p>
        <p>Take care and come back soon.</p>
      </div>
    </div>
  );
}

export default App;
