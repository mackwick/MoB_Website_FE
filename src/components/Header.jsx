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
        <Link to="/projects">Projects</Link>
        <Link to="/about">About MoB</Link>
        <Link to="/getinvolved">Get Involved</Link>
      </nav>
    </div>
  );
}

export default Header;
