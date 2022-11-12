import React from "react";
import Context from "../Context";
import { useContext } from "react";

const Carrito = () => {
    const { usuarios, setUsuarios, productos, setProductos, sumarCarrito } =
      useContext(Context);

  // Función que suma el precio de los productos agregados al carrito
  //   const total = sumarCarrito.reduce(
  //     (valorAnterior, { count, price }) => valorAnterior + price * count,
  //     0
  //   );
  //   let sum = 0;

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Carrito </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </>
  );
};
export default Carrito;


