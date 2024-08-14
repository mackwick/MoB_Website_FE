function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <div className="social-icons">
          <a href="https://www.instagram.com/mobtheatre/" className="icon link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/MoBTheatreCompany/"
            className="icon link"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCplIp7V5VNQDvq00an61NcQ"
            className="icon link"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="contact-info">
          <h3 className="footer-content">Contact Us</h3>
          <p className="footer-content">Wilmington, NC</p>
          <p className="footer-content">
            <p>910-367-5286</p>
            <p>
              <a href="mailto:mouthsofbabestheatre@gmail.com" className="link">
                mouthsofbabestheatre@gmail.com
              </a>
            </p>
          </p>
        </div>
      </div>
      <div className="footer-reference">
        <p className="footer-content">© 2024 Mouths of Babes Theatre</p>
        <p className="footer-content">
          Website by{" "}
          <a href="https://github.com/mackwick" className="link">
            MackWick Development
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
