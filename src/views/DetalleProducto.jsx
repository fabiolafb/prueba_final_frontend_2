// Componentes
import Context from "../Context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import NavbarPrivado from "../components/NavbarPrivado";
// Estilos
import "../assets/css/detalleProd.css";
import cerrar from "../assets/img/cerrar.png";


export default function DetalleProducto() {
  const { productos, setProductos } = useContext(Context);
  const { id } = useParams();

  const productoId = productos.find((prod) => prod.id === id);
  console.log(productoId);

  const productoFavorito = (id) => {
    const favoritoIndex = productos.findIndex((p) => p.id === id);
    productos[favoritoIndex].favorito = !productos[favoritoIndex].favorito;
    setProductos([...productos]);
  };

  return (
    <>
      <NavbarPrivado />
      {productoId && (
        <Card className="container-card-detalle sm">
          <div className="card-detalle-prod">
            <div className="card-detalle-izq">
              <h5 className="name-card-detalle">
                <b>{productoId.prodName}</b>
              </h5>
              <img src={productoId.img} alt="" className="zoom" width="200" />
              <div className="categ-fav">
                <svg
                  onClick={() => productoFavorito(productoId.id)}
                  width="33px"
                  viewBox="0 0 24 24"
                  className="hover-2"
                >
                  <path
                    fill={productoId.favorito ? "red" : "white"}
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
                <p className="categ-card-detalle">
                  Categoría: <b>{productoId.categ}</b>
                </p>
              </div>
            </div>

            <div className="card-detalle-der">
              <div className="div-descr d-flex">
                <p>
                  <b>Descripción:</b>
                </p>
                <p className="descr-card-detalle">{productoId.desc}</p>
              </div>

              <div className="div-autor d-flex">
                <p>
                  <b>Vendido por:</b>
                </p>
                <p className="autor-card-detalle">
                  {productoId.contacto.nombre + " " + productoId.contacto.apellido}                
                </p>
              </div>
              <h4 className="precio">
                Precio{" "}
                {productoId.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </h4>

            </div>
            <Link to="/tienda">
              <img
                src={cerrar}
                alt=""
                className="cerrar"
                data-toggle="tooltip"
                data-placement="top"
                title="Volver a Tienda"
              />
            </Link>
          </div>
        </Card>
      )}
    </>
  );
}
