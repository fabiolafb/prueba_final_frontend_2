import React from "react";
//import Context from "../Context";
import { Navbar } from "react-bootstrap";
import { Link, } from "react-router-dom";
import "../assets/css/navbarPrivado.css";
import logo from "../assets/img/logo_3.png";
//import carrito from "../assets/img/carrito.png";
import sign_out from "../assets/img/sign_out.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarPrivate() {

  
  return (
    <>
      <Navbar
        id="id-nav-private"
        className="navbar navbar-expand-lg"
        collapseOnSelect
      >
        <div id="id-container-fluid" className="container-fluid ps-5">
          <Link to="/" className="navbar-brand" >
            <img alt="" src={logo} width="150" classNameName="logo_privado" />
          </Link>

          <div id="navbarNavDropdown" className="">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  id="nombre-login"
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nombre usuario
                </Link>
                
              </li>
              <li className="nav-item">
                <Link id="nav-link-signout" className="nav-link" to="/">
                  <img
                    alt=""
                    src={sign_out}
                    width="30"
                    className="sign_out"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Cerrar sesión"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
