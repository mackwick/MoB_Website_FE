import logo from "./../../public/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Mouths of Babes logo" className="logo" />
      </div>
      <nav className="header-menu">
        <Link to="/">Home</Link>
        <p>Projects</p>
        <Link to="/about">About MoB</Link>
        <p>Get Involved</p>
      </nav>
    </div>
  );
}

export default Header;
