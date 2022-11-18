//STYLES
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/img/logo_3.png";
import "../assets/css/contactoVendedorModal.css";
import { text } from "@fortawesome/fontawesome-svg-core";
function ContactoVendedorModal({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="title-modal">Datos de Vendedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center" >
            ¡Gracias por interesarte en mi producto!
          </h5>
          <p className="text-center">Estos son mis datos, te responderé a la brevedad.</p>

          <div className="d-flex flex-column card-block mx-auto">
            <ul>
              <li>Nombre: <strong>fabiola</strong></li> 
              <li>Correo electrónico: <strong>fabiola</strong></li>
              <li>Número de contacto electrónico: <strong>fabiola</strong></li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer id="footer-modal">
          <img alt="" src={logo} width="120" className="img-modal" />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactoVendedorModal;

{
  /* <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title>Datos de contacto </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="card-block text-center mt-2 mb-3">
      <h5 className="card-title text-center">
        <strong>Nombre:</strong>{" "}
      </h5>
      <h6 className="card-subtitle text-muted">
        <strong>Nombre común:</strong>
      </h6>
    </div>

    <div className="d-flex flex-column card-block mx-1">
      <p className="card-text">
        <strong>Origen:</strong>{" "}
      </p>
      <p className="card-text">
        <strong>Descripción:</strong>{" "}
      </p>
      <p className="card-text">
        <strong>Exposición:</strong>{" "}
      </p>
      <p className="card-text">
        <strong>Suelo:</strong>{" "}
      </p>
      <p className="card-text">
        <strong>Esparcimiento:</strong>{" "}
      </p>
      <p className="card-text">
        <strong>Usos:</strong>{" "}
      </p>
    </div>
  </Modal.Body>
  {/* <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer> */
}
// </Modal>; */}
