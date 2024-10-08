import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/" className="link">
          MOUTHS OF BABES THEATRE
        </Link>
      </div>

      <nav className="header-menu">
        <div className="offscreen-menu">
          <a href="/" className="link">
            Home
          </a>

          <a href="/about" className="link">
            About MoB
          </a>
          <a href="/projects" className="link">
            Projects
          </a>
          <a href="/getinvolved" className="link">
            Get Involved
          </a>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY"
            className="link"
            target="_blank"
          >
            Donate
          </a>
        </div>

        <div className="hamburger-menu">
          <label htmlFor="ham-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="ham-toggle" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
