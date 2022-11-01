import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/img/logo_3.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";

export default function FooterPrivado() {
  return (
    <>
      <footer id="id-footer-privado" className="footer navbar-expand-lg ps-5">
        <Navbar.Brand className="">
          <NavLink to="/">
            <img alt="" src={logo} width="150" className="logo ms-auto" />
          </NavLink>
        </Navbar.Brand>
        <hr />

        <div className="info-footer">
          <p>Todos los derechos reservados</p>
          <img
            src={instagram}
            alt=""
            className="logo_rrss"
            data-toggle="tooltip"
            data-placement="top"
            title="Instagram Condominio Ventas"
          />
          <img
            src={facebook}
            alt=""
            className="logo_rrss"
            data-toggle="tooltip"
            data-placement="top"
            title="Facebook Condominio Ventas"
          />
        </div>
      </footer>
    </>
  );
}
