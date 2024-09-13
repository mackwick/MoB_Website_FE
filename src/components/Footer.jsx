function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <div className="contact-info">
          <p className="footer-content">
            {" "}
            <span className="social-icons">
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
            </span>{" "}
            Wilmington, NC |{" "}
            <a href="tel:9103675286" className="link">
              910-367-5286
            </a>
          </p>
          <p className="footer-content">
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
