import Image from 'react-bootstrap/Image';
import './Banner.css';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

import BannerForm from './BannerForm';

function Banner() {
  return(
    <>
    <div className="BannerContainer">
      <Image className='Bannerbackground'
        src="src/assets/headerimg/bannerback.png"
        fluid
        style={{
          background: "linear-gradient(to right, #114e8b, #2A9AD7)"
        }}
      />
      
      <div className="Title">
        <h1>Let’s explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>
      </div>

     
        <div className='SearchForm'>
       
          <p className='SearchFormh1'
           style=
           {{width:"888.467529296875px",
            height:"23px"
           }}
          
          >Search flights
          </p>
 
            <div className='SearchFormchooise' 
             style=
             {{width:"216.532470703125px",
              height:"38px",
              
             }}
            >
              <Form >
                <Form.Check 
                  label="Return"
                  type='radio'
                  style=
             {{width:"86px",
              height:"38px"
             }}
                />
              </Form>
              </div>
              <div className='SearchFormchooise2'>
              <Form>
              <Form.Check 
                type='radio'
                label="One-way"
                style=
             {{width:"110.532470703125px",
              height:"38px",
              left:"106px"
             }}
              />
              
            </Form>
            </div>
          </div>
           
         








       <Row className="INPUTFORM">
      <Col md="3">
        <BannerForm controlId="departure" label="Departure" placeholder="Enter your departure location" />
      </Col>
      <Col md="3">
        <BannerForm controlId="arrival" label="Arrival" placeholder="Los Angeles (LA)" />
      </Col>
      <Col md="3"> 
        <BannerForm controlId="date" label="Date" placeholder="Select a date" />
      </Col>
        
        <Col md="3">
        <div className="formbutton d-flex gap-2 mb-2">
        <Button  variant="primary" size="lg"
          style={{
            background: "#F99A0E",
            margin:"19px",
            marginLeft:"0"
          }}
        >
        Search flights
        </Button>
        </div>
        </Col>
       



      </Row>
    </div>
    </>
  )
}

export default Banner;