import Context from "../Context";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/img/logo_3.png";
import "../assets/css/contactoVendedorModal.css";


function ContactoVendedorModal({ show, handleClose, escogido}) {


  // const [nuevoArray, setNuevoArray] = useState([]);
  // const nuevoArrayUser = () => {
  //   if (productos.userId == usuarios.userId) {
  //     nuevoArrayUser = [].concat(productos, usuarios);
  //   }
  //   setNuevoArray(nuevoArrayUser);

  //   console.log(nuevoArray);
  // };
  // let { id } = useParams();
  // const productoUserId = productos.find((id) => id.contacto === id);
  // console.log(productoId);

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
          <h5 className="text-center" >
            ¡Gracias por interesarte en mi producto!
          </h5>
          <p className="text-center">
            Estos son mis datos, te responderé a la brevedad.
          </p>

          <div className="d-flex flex-column card-block mx-auto" key={escogido?.id}>
            <h6>Nombre: <span>{escogido?.prodName}</span></h6>

            <ul>
              <li>
                Nombre: <b>{escogido?.prodName}</b>
              </li>
              <li>
                Correo electrónico: <b>decocasa@gmail.com</b>
              </li>
              <li>
                Número de contacto electrónico: <b>912345678</b>
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

