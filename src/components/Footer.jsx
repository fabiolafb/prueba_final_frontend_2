import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/img/logo_3.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";


const Footer = () => {
  return (
    <>
      <footer id="id-footer-public" className="footer fixed-bottom ">
        <NavLink to="/">
          <img alt="" src={logo} width="150" className="logo-footer ms-auto" />
        </NavLink>

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
};
export default Footer;
