import logo from "./../../public/images/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Mouths of Babes logo" className="logo" />
      </div>
      <nav className="header-menu">
        <p>Home</p>
        <p>Projects</p>
        <p>About MoB</p>
        <p>Get Involved</p>
      </nav>
    </div>
  );
}

export default Header;
