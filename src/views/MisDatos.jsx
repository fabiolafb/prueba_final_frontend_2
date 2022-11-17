import React from "react";
import Context from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/misDatos.css";
import NavbarPrivado from "../components/NavbarPrivado";
import icon_edit_datos from "../assets/img/icon_edit_datos.png";
import MenuPerfil from "../components/MenuPerfil";


export default function MisDatos() {
  const { userLogin } = useContext(Context);

  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil-misdatos">
        <main className="container-menu-misdatos">
          <div className="contain-misdatos">
            <h4 id="h4-misdatos">Datos Personales</h4>
            <div className="form-datos-personales">
              <h6>Nombre completo</h6>
              <input
                type="text"
                name="nombre"
                className="form-control sm"
                disabled
                placeholder=""
                defaultValue={userLogin.nombre + " " + userLogin.apellido}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Correo eletrónico</h6>
              <input
                type="text"
                name="email"
                className="form-control sm"
                disabled
                placeholder=""
                defaultValue={userLogin.email}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Teléfono de contacto</h6>
              <input
                type="text"
                name="phone"
                className="form-control sm"
                disabled
                placeholder=""
                defaultValue={userLogin.nro}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Nombre de negocio o tienda</h6>
              <input
                type="text"
                name="tienda"
                className="form-control sm"
                disabled
                placeholder=""
                defaultValue={userLogin.tienda}
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
