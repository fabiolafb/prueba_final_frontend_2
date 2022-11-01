import React from "react";
import "../assets/css/misdatos.css";
import NavbarPrivado from "../components/NavbarPrivado";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import icon_edit_datos from "../assets/img/icon_edit_datos.png";
import MenuPerfil from "../components/MenuPerfil";

export default function MisDatos() {
  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil-misdatos">
        <main className="container-menu-misdatos">
          <div className="contain-misdatos">
            <h4>Datos Personales</h4>
            <div className="form-datos-personales">
              <h6>Nombre completo</h6>
              <input
                type="text"
                name="nombre"
                className="form-control sm"
                required
                placeholder="Nombre y Apellido"
              />
            </div>

            <div className="form-datos-personales">
              <h6>Correo eletrónico</h6>
              <input
                type="mail"
                name="mail"
                className="form-control sm"
                required
                placeholder="email"
              />
            </div>

            <div className="form-datos-personales">
              <h6>Teléfono de contacto</h6>
              <input
                type="txt"
                name="phone"
                className="form-control sm"
                required
                placeholder="Nro contacto"
              />
            </div>

            <div className="form-datos-personales">
              <h6>Nombre de negocio o tienda</h6>
              <input
                type="txt"
                name="tienda"
                className="form-control sm"
                required
                placeholder="Negocio o Tienda"
              />
            </div>
            <Link to="/edicion-datos" className="to-edicion">
              <button className="btn-edicion-datos">
                Editar datos
                <img src={icon_edit_datos} alt="" className="icono-edit" />
              </button>
            </Link>
            
          </div>

          <br />
        </main>
      </main>
    </>
  );
}
