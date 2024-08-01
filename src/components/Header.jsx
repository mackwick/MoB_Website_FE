import logo from "./../../public/images/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Mouths of Babes logo" className="logo" />
      </div>
      <div className="header-menu">Here's the menu</div>
    </div>
  );
}

export default Header;
