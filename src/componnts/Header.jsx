import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Header.css";

export default function Header() {
  return (
    <Navbar expand="lg" className="headernavbar">
      <Container>
        <Row className="w-100 align-items-center">
          {/* شعار الموقع */}
          <Col md="8">
            <Navbar.Brand href="#home">
              <img
                src="src/assets/headerimg/image.png"
                width="150"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>

          {/* عناصر التنقل */}
          <Col md="2" className="text-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="NavigationMenu" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center">
                <Nav.Link href="#" style={{ color: "#1262AF" }}>Explore</Nav.Link>
                <Nav.Link href="#">Search</Nav.Link>
                <Nav.Link href="#">Hotels</Nav.Link>
                <Nav.Link href="#">Offers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>

          {/* الأيقونات */}
          <Col md="2" className="text-end">
            <img
              src="src/assets/headerimg/bell.png"
              width="30"
              height="30"
              className="me-3"
              alt="Notifications"
            />
            <img
              src="src/assets/headerimg/profilepic.png"
              width="30"
              height="30"
              alt="Profile"
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
