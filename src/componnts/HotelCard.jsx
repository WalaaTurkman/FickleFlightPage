import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./HotelCard.css";

function HotelCard({ imgsrc, cardgraph, TitleCard, TextCard,RateNumber ,Reviews}) {
  return (
    <Card className='Popular-Stays' style={{ width: '320px', height: "442px" }}>
      <Card.Img variant="top" src={imgsrc} width="270px" height="200" className='cardimage' />
      <Container>
        <Card.Body>
          
          {/* العنوان مع أيقونة الفيديو */}
          <Row className="align-items-center">
            <Col xs="9">
              <Card.Title className="Cardgraph text-muted small mb-0">{cardgraph}</Card.Title>
            </Col>
            <Col xs="3" className="text-end">
              <img src="src/assets/headerimg/videoplay.png" width="20" height="20" alt="video play" />
            </Col>
          </Row>

          {/* اسم الفندق */}
          <Card.Subtitle className="CardSubtitle fw-bold mt-2">{TitleCard}</Card.Subtitle>
          <Card.Text className="TextCard text-dark">${TextCard}/night</Card.Text>

          {/* التقييم والنجمة */}
          <Row className="align-items-center" style={{width:"270px", height:"19px"}}>
            <Col xs="auto">
              <img className="star me-1" src="src/assets/headerimg/star.png" width="20" height="20" alt="star" />
              <span className="Rate-Number mt-1 fw-bold" style={{ fontSize: "16px", lineHeight: "100%" }}>
              {RateNumber}
              </span>
            </Col>
            <Col xs="auto">
              <span className="Review text-primary ">(${Reviews} reviews)</span>
            </Col>
          </Row>
          <Row className=" align-items-center mt-3">
          <Button className="CardButton" variant="primary">MORE DETAILS</Button>
          </Row>

        </Card.Body>
      </Container>
    </Card>
  );
}

export default HotelCard;
