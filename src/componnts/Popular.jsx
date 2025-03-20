import Card from 'react-bootstrap/Card';
import "./Popular.css";

function Popular({ imgSrc, city, price }) {
  return (
    <Card className="City-Card  " style={{ width: "288px", height: "182px",gap:"10px" }}>
      <img
        src={imgSrc}
        width="288"
        height="182"
        className="City-Image d-inline-block align-top"
        alt={city}
      />
      <div className="holiday-overlay">
        <p className="City">{city}</p>
        <span className="holiday-price">FROM </span>
        <strong className="dollarNumber" style={{ fontWeight: "bold", fontSize: "38px" }}>${price}</strong>
      </div>
    </Card>
  );
}

export default Popular;
