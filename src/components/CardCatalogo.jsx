import Context from "../Context";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/cardCatalogo.css";
import { Card } from "react-bootstrap";
import carrito from "../assets/img/carrito.png";

export default function CardCatalogo() {
  const { productos, setProductos, buscando, filtradoCategoria } =
    useContext(Context);
  const navigate = useNavigate(); //crear una ruta

  const productoFavorito = (id) => {
    const favoritoIndex = productos.findIndex((p) => p.id === id);
    productos[favoritoIndex].favorito = !productos[favoritoIndex].favorito;
    setProductos([...productos]);
    console.log(productoFavorito);
  };

  return (
    <>
      <div className="contenedor-catalogo">
        <h4>Productos en venta</h4>
        <div className="div-card-prod sm">
          {productos
            .filter((producto) => {
              if (buscando === "" && filtradoCategoria === "") {
                return producto;
              } else if (
                filtradoCategoria === "" &&
                (producto.prodName
                  .toLocaleLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(buscando.toLocaleLowerCase()) ||
                  producto.categ
                    .toLocaleLowerCase()
                    .includes(buscando.toLocaleLowerCase()))
              ) {
                return producto;
              } else if (
                buscando === "" &&
                producto.categ.includes(filtradoCategoria)
              ) {
                return producto;
              }
            })
            .map((prod, id) => (
              <Card
                style={{ width: "18rem" }}
                className="card-producto-container"
                key={id}
              >
                <Card.Img
                  variant="top"
                  src={prod.img}
                  className="img-card-prod"
                />
                <Card.Body className="card-body">
                  <svg
                    onClick={() => productoFavorito(prod.id)}
                    width="38px"
                    viewBox="0 0 24 24"
                    className="hover"
                  >
                    <path
                      fill={prod.favorito ? "red" : "white"}
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                  <Card.Text className="name-card">
                    <b>{prod.prodName}</b>
                  </Card.Text>
                  <Card.Text className="categ-card">
                    Categoría: <i>{prod.categ}</i>
                  </Card.Text>
                  <Card.Title className="price-card">
                    {" "}
                    {prod.price.toLocaleString("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    })}
                  </Card.Title>

                  <div className="btns-card">
                    <button
                      variant="primary"
                      className="btn-ver"
                      onClick={() => navigate(`/detalleproducto/${prod.id}`)}
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
                      <Link to="/" className="nav-link-priv">
                        <img
                          src={carrito}
                          className="img_btn"
                          width="18"
                          alt="..."
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Ir a Mi perfil"
                        />
                      </Link>
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
