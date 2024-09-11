function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mobtheatre/"
            className="icon link"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/MoBTheatreCompany/"
            className="icon link"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCplIp7V5VNQDvq00an61NcQ"
            className="icon link"
            target="_blank"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="contact-info">
          <h5 className="footer-content">Contact Us</h5>
          <p className="footer-content">Wilmington, NC</p>
          <p className="footer-content">
            <a href="tel:9103675286" className="link">
              910-367-5286
            </a>
            <p>
              <a
                href="mailto:mouthsofbabestheatre@gmail.com"
                className="link"
                target="_blank"
              >
                mouthsofbabestheatre@gmail.com
              </a>
            </p>
            <p className="footer-content">© 2024 Mouths of Babes Theatre</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
