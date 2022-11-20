// Componentes
import Modal from "react-bootstrap/Modal";
import logo from "../assets/img/logo_3.png";
// Estilos
import "../assets/css/contactoVendedorModal.css";


function ContactoVendedorModal({ show, handleClose, contacto }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="title-modal">Datos del Vendedor</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-encabezado">
            <h5 className="text-center">
              ¡Gracias por interesarte en mi producto!
            </h5>
            <p className="text-center">
              Estos son mis datos, te responderé a la brevedad.
            </p>
          </div>

          <div className="d-flex flex-column card-block ">
            <ul>
              <li>
                Nombre: <b>{contacto.contacto.nombre + " " + contacto.contacto.apellido} </b>
              </li>
              <li>
                Correo electrónico: <b>{contacto.contacto.email}</b>
              </li>
              <li>
                Número de contacto electrónico: <b>{contacto.contacto.nro}</b>
              </li>
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
