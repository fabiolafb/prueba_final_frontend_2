import React from "react";
//import Context from "../Context";
//import { useContext } from "react";
import NavbarPrivado from "../components/NavbarPrivado";
import in_tienda from "../assets/img/in_tienda.png";
import in_perfil from "../assets/img/in_perfil.png";
//import { Link } from "react-router-dom";
import "../assets/css/homePrivado.css";
import { Link } from "react-router-dom";
//import FooterPrivado from "../components/FooterPrivado";

export default function HomePrivado() {
  return (
    <>
      <NavbarPrivado />
      <div className="contenedor-home-privado">
        <div className="div-txt-privado">
          <h2>
            Bienvenid@ <span id="name-home">Name </span>
          </h2>
          <h3 id="slogan">¿Qué deseas hacer?</h3>
        </div>

        <div className="acceso-opcion">
          <div className="card-acceso">
            <Link to="/tienda">
              <img src={in_tienda} className="card-img-top" width="2%" alt="..." />
            </Link>
            <hr />
            <h5 className="card-text">Ir a TIENDA</h5>
          </div>

          <div className="card-acceso">
            <Link to="/perfil-usuario">
              <img src={in_perfil} className="card-img-top" width="2%" alt="..." />
            </Link>
            <hr />
            <h5 className="card-text">Ir a tu PERFIL</h5>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
