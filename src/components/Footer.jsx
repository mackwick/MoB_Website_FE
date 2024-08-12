function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <div className="social-icons">
          <a href="https://www.instagram.com/mobtheatre/" className="icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/MoBTheatreCompany/"
            className="icon"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCplIp7V5VNQDvq00an61NcQ"
            className="icon"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="contact-info">
          <h3 className="footer-content">Contact Us</h3>
          <p className="footer-content">Wilmington, NC</p>
          <p className="footer-content">
            Phone: (910)-367-5286 | Email:{" "}
            <a href="mailto:mouthsofbabestheatre@gmail.com">
              mouthsofbabestheatre@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-reference">
        <p className="footer-content">© 2024 Mouths of Babes Theatre</p>
        <p className="footer-content">
          Website by{" "}
          <a href="https://github.com/mackwick">MackWick Development</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
