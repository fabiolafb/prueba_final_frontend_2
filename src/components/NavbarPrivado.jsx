import React from "react";
//import Context from "../Context";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/navbarPrivado.css";
import Carrito from "./Carrito";
import logo from "../assets/img/logo_3.png";
import sign_out from "../assets/img/sign_out.png";
import img_perfil from "../assets/img/in_perfil.png";
import carrito from "../assets/img/carrito.png";

export default function NavbarPrivate() {
  return (
    <>
      <Navbar
        id="id-nav-private"
        className="navbar navbar-expand-lg"
        collapseOnSelect
      >
        <div id="id-container-fluid" className="container-fluid ps-5">
          <Link to="/home-perfil" className="navbar-brand">
            <img alt="" src={logo} width="150" className="logo_privado" />
          </Link>
        </div>
        <div id="id-container-fluid" className="container-select">
          <div className="nav-item">
            <Link to="/perfil-usuario" className="nav-link-priv">
              <img
                src={img_perfil}
                className="img_nav"
                width="32"
                alt="..."
                data-toggle="tooltip"
                data-placement="top"
                title="Ir a Mi perfil"
              />
            </Link>
          </div>

          <div className="nav-item">
            <Link
              className="nav-link-priv"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                src={carrito}
                className="img_nav"
                width="31"
                alt="..."
                data-toggle="tooltip"
                data-placement="top"
                title="Ir a Mi perfil"
              />
            </Link>
          </div>

          <div className="nav-item">
            <Link id="nav-link-signout" className="nav-link-priv" to="/">
              <img
                alt=""
                src={sign_out}
                width="32"
                className="sign_out"
                data-toggle="tooltip"
                data-placement="top"
                title="Cerrar sesión"
              />
            </Link>
          </div>
        </div>
      </Navbar>
      <Carrito />
    </>
  );
}
