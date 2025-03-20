import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";

// استيراد الصور
import FooterLogo from "../assets/headerimg/footerlogo.png";
import InstagramIcon from "../assets/headerimg/Footericon/instagram-with-circle.png";
import TwitterIcon from "../assets/headerimg/Footericon/twitter-with-circle.png";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        background: "linear-gradient(to right, #0B5BA8 50%, #2A9AD7)",
        padding: "20px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={3} className="footer-sec1">
            <img
              src={FooterLogo}
              width="150"
              height="30"
              className="footer-logo"
              alt="Fickle Flight Logo"
            />
            <p className="footer-text">
              Fickle Flight is your one-stop travel portal. We offer hassle-free
              flight and hotel bookings. We also have all your flight needs in
              our online shop.
            </p>
            <div className="social-icons">
              <img src="/assets/headerimg/Footericon/facebook-with-circle.png" className="facebookicon" alt="Facebook" />
              <img src="/assets/headerimg/Footericon/InstagramIcon" className="instaicon" alt="Instagram" />
              <img src="/assets/headerimg/Footericon/TwitterIcon" className="twitericon" alt="Twitter" />
            </div>
          </Col>

          <Col md={9}>
            <Row>
              <Col md={3}>
                <div className="footer-section">
                  <p className="footer-title">Company</p>
                  <p className="footer-link">About Us</p>
                  <p className="footer-link">News</p>
                  <p className="footer-link">Careers</p>
                  <p className="footer-link">How We Work</p>
                </div>
              </Col>

              <Col md={3}>
                <div className="footer-section">
                  <p className="footer-title">Support</p>
                  <p className="footer-link">Account</p>
                  <p className="footer-link">Support Center</p>
                  <p className="footer-link">FAQ</p>
                  <p className="footer-link">Accessibility</p>
                </div>
              </Col>

              <Col md={3}>
                <div className="footer-section">
                  <p className="footer-title">More</p>
                  <p className="footer-link">Covid Advisory</p>
                  <p className="footer-link">Airline Fees</p>
                  <p className="footer-link">Tips</p>
                  <p className="footer-link">Quarantine Rules</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
