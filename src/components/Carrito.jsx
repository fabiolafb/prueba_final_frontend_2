import React from "react";
import Context from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/carrito.css";

const Carrito = () => {
  const { sumarCarrito, eliminarCarrito } =
    useContext(Context);

  // Función que suma el precio de los productos agregados al carrito
  const total = sumarCarrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );
  let sum = 0;



  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Carro de compras</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <hr className="hr-carrito" />
          {sumarCarrito.map((pe, id) => (
            <div key={id}>
              <div className="div-carrito-prod">
                <div className="img-delete">
                  <img
                    alt=""
                    src={pe.img}
                    style={{ width: "5.5rem", borderRadius: "5px" }}
                    className="img-prod-carr"
                  />
                  <button className="delete-carrito" onClick={() => eliminarCarrito(pe.id)}>Eliminar</button>
                  
                </div>

                <div className="name-price">
                  <div>
                    <h6 style={{ width: "12rem" }}>{pe.prodName}</h6>
                  </div>
                  <div className="price-prod-carr">
                    <h5>
                      {pe.price.toLocaleString("es-CL", {
                        style: "currency",
                        currency: "CLP",
                      })}
                    </h5>
                  </div>
                </div>
              </div>
              <hr className="hr-carrito" />
            </div>
          ))}
        </div>

        <div className="offcanvas-footer">
          <hr />
          <div className="resumen">
            <div>Costo total de productos</div>
            <div>
              {" "}
              <p className="total-txt">
                <b>{total.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}</b>
              </p>
            </div>
          </div>
          <button className="btn-pagar"> Comprar ahora </button>
          <Link to="/tienda" className="link-comprar">
          <p id="comprar-mas"
            data-bs-dismiss="offcanvas"
            aria-label="Close" >Seguir comprando</p></Link>
        </div>
      </div>
    </>
  );
};
export default Carrito;
