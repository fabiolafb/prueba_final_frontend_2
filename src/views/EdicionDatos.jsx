import React from "react";
import "../assets/css/editarDatos.css";
import NavbarPrivado from "../components/NavbarPrivado";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import icon_edit_datos from "../assets/img/icon_edit_datos.png";

const EdicionDatos = () => {
  return (
    <>
      <NavbarPrivado />
      <main className="container-perfil">
        <header>
          <div className="barra-superior-perfil">
            <div className="nav-name-seccion">
              <Link to="/perfil-usuario" id="id-perfil-usuario">
                <div class="card-superior-perfil">
                  <h5 class="card-text">Mi PERFIL</h5>
                </div>
              </Link>
            </div>
            <nav id="id-nav-menu">
              <ul>
                <Link to="/mis-datos">
                  <li>Mis datos</li>
                </Link>

                <Link to="/favoritos">
                  <li>Mis favoritos</li>
                </Link>
                <Link to="/misPublicaciones">
                  <li>Mis publicaciones</li>
                </Link>
                <Link to="/agregarproducto">
                  <li>Agregar publicación</li>
                </Link>
              </ul>
            </nav>
            <div id="id-tienda-perfil">
              <Link to="/tienda">
                <Button variant="success">Ir a Tienda</Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container-menu-misdatos">
          <div className="contain-misdatos">
            <h4>Actualiza tus datos personales</h4>
            <div className="form-datos-personales">
              <h6>Nombre</h6>
              <input
                type="text"
                name="nombre"
                className="form-control sm"
                required
                placeholder="Nombre y Apellido"
              />
            </div>

            <div className="form-datos-personales">
              <h6>Apellido</h6>
              <input
                type="text"
                name="apellido"
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
            <div className="btns-guardar">
              <button
                variant="primary"
                className="btn-guardar"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar cambios"
              >
                Guardar
              </button>
              <button
                variant="primary"
                className="btn-no-guardar"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar cambios"
              >
                Editar después
              </button>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default EdicionDatos;
