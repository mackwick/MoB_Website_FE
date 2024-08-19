import logo from "/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/" className="link">
          <img src={logo} alt="Mouths of Babes logo" className="logo" />
        </Link>
      </div>

      <nav className="header-menu">
        <div className="offscreen-menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <Link to="/about" className="link">
            About MoB
          </Link>
          <Link to="/getinvolved" className="link">
            Get Involved
          </Link>
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
