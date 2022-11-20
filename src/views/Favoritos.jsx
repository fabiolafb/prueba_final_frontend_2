// Componentes
import Context from "../Context";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavbarPrivado from "../components/NavbarPrivado";
import CardFavoritos from "../components/CardFavoritos";
// Estilos
import "../assets/css/favoritos.css";
import { Card, Button } from "react-bootstrap";



export default function Favoritos() {
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
            <h5>Productos Favoritos</h5>
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
              <CardFavoritos key={id} elemCard={elem}/>
            ))}
        </div>
      </div>
  
    </>
  );
}
