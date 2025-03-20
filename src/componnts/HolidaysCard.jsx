import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./HotelCard.css";

function HolidaysCard({ title, image, price, duration }) {
  return (
    <Card className='Recommended-Holidays' style={{ width: '320px', height: "327px", paddingRight: "16px", paddingLeft: "16px" }}>
      <Card.Img
        variant="top"
        src={image}
        width="288px"
        height="242px"
        className='cardimage'
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />
      <Container>
        <Card.Body>
          <Row className="align-items-center" style={{ width: "256px", height: "45px" }}>
            <Col xs="3">
              <Card.Title className="TitleCard">{title}</Card.Title>
            </Col>
            <Col className="Price">
              ${price}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="Code text-muted small">{duration}</p>
            </Col>
          </Row>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default HolidaysCard;
