import Context from "../Context";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import NavbarPrivado from "../components/NavbarPrivado";
import "../assets/css/favoritos.css";
//import FooterPrivado from "../components/FooterPrivado";

export default function Favoritos() {
  const { productos, setProductos } = useContext(Context);
  const navigate = useNavigate();

  const borrarFavorita = (id) => {
    const productoIndex = productos.findIndex((f) => f.id === id);
    productos[productoIndex].favorito = !productos[productoIndex].favorito;
    setProductos([...productos]);
  };

  return (
    <>
      <NavbarPrivado />
      <div className="container-favoritos">
        <header className="barra-superior-tienda-fav">
          <div className="link-volver d-flex">
          <Link to="/perfil-usuario" id="id-perfil">
                <Button variant="warning" >Mi perfil</Button>{" "}
              </Link>
            <Link to="/tienda" id="id-tienda">
              <Button variant="success">Ir a Tienda</Button>
            </Link>
          </div>
        </header>

        <div className="container-tittle-fav d-flex">
          <div className="cont-tittle">
            <h4>Productos Favoritos</h4>
            <p>
              Presiona sobre el corazón para <b>eliminar</b> el producto como
              favorito
            </p>
          </div>
        </div>

        <hr />

        <div className="div-card-prod-fav sm">
          {productos
            .filter((elem) => elem.favorito)
            .map((elem, id) => (
              <Card
                style={{ width: "18rem" }}
                className="card-producto-container"
                key={id}
              >
                <Card.Img
                  variant="top"
                  src={elem.img}
                  className="img-card-prod"
                />
                <Card.Body className="card-body">
                  <svg
                    onClick={() => borrarFavorita(elem.id)}
                    width="38px"
                    viewBox="0 0 24 24"
                    className="hover"
                  >
                    <path
                      fill={elem.favorito ? "red" : "white"}
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                  <Card.Text className="name-card">
                    <b>{elem.name}</b>
                  </Card.Text>
                  <Card.Text className="categ-card">
                    Categoría: <i>{elem.categ}</i>
                  </Card.Text>
                  <Card.Title className="price-card">{elem.price}</Card.Title>

                  <div className="btns-card">
                    <button
                      variant="primary"
                      className="btn-ver"
                      onClick={() => navigate(`/detalleProducto/${elem.id}`)}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Ver detalle del producto"
                    >
                      Ver detalle
                    </button>
                    <button
                      variant="primary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Agregar para comprar"
                    >
                      Comprar
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
