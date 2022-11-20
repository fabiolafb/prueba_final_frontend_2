import Context from "../Context";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ContactoVendedorModal from "../components/ContactoVendedorModal";
import { Card } from "react-bootstrap";

export default function CardFavoritos({ elemCard }) {
  const { productos, setProductos } = useContext(Context);

  const navigate = useNavigate();

  const borrarFavorita = (id) => {
    const productoIndex = productos.findIndex((f) => f.id === id);
    productos[productoIndex].favorito = !productos[productoIndex].favorito;
    setProductos([...productos]);
  };

  /* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
    <Card
      style={{ width: "15rem" }}
      className="card-producto-container"
      key={elemCard.id}
    >
      <Card.Img variant="top" src={elemCard.img} className="img-card-prod" />
      <Card.Body className="card-body">
        <svg
          onClick={() => borrarFavorita(elemCard.id)}
          width="38px"
          viewBox="0 0 24 24"
          className="hover"
        >
          <path
            fill={elemCard.favorito ? "red" : "white"}
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>
        <Card.Text className="name-card">
          <b>{elemCard.prodName}</b>
        </Card.Text>
        <Card.Text className="categ-card">
          Categoría: <i>{elemCard.categ}</i>
        </Card.Text>
        <Card.Title className="price-card">
          {elemCard.price.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </Card.Title>

        <div className="btns-card">
          <button
            variant="primary"
            className="btn-ver"
            onClick={() => navigate(`/detalleProducto/${elemCard.id}`)}
            data-toggle="tooltip"
            data-placement="top"
            title="Ver detalle del producto"
          >
            Ver detalle
          </button>
          <div className="div-btn-modal-fav">
            <button
              onClick={handleShow}
              id="btn-modal-fav"
              variant="primary"
              data-toggle="tooltip"
              data-placement="top"
              title="Ver datos vendedor"
            >
              <strong>¡Quiero comprar!</strong>
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
    <ContactoVendedorModal show={show} contacto={elemCard} handleClose={handleClose} />
  </>
  );
}
