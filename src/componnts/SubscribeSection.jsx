import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './SubscribeSection.css';

export default function SubscribeSection() {
  return (
    <div className="subscribe-container">
      {/* الخلفية */}
      <Image 
        className='Bannerbackground'
        src="src/assets/headerimg/Subscribesectionbackground.png"
        fluid
      />
        <Row className="form-header">
        <h4 className="form-title">SUBSCRIBE TO OUR NEWSLETTER</h4>
        <p className="form-subtitle">Get weekly updates</p>

        </Row>
      <Row>
        <div className="formcard">
        <p className="form-sub">Fill in your details to join the party!</p>
            <FloatingLabel controlId="floatingName" label="Your name" className="forminput mb-3">
                <Form.Control type="text" placeholder="Your name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email address" className="forminput mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <button className="submit-btn">SUBMIT</button>
        </div>
      </Row>
    </div>
  );
}
