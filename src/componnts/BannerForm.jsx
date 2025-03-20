import Form from 'react-bootstrap/Form';
import "./BannerForm.css";
function BannerForm({ controlId, label, placeholder }) {
  return (
    <Form>
      <Form.Group controlId={controlId} className="mb-3">
        <Form.Label className="Labelform">{label}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} />
      </Form.Group>
    </Form>
  );
}

export default BannerForm;
