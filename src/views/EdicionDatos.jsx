import React from "react";
import "../assets/css/editarDatos.css";
import MenuPerfil from "../components/MenuPerfil";
import NavbarPrivado from "../components/NavbarPrivado";

const EdicionDatos = () => {

  // usar defaultValues: de useForm https://www.youtube.com/watch?v=GEfOr56nBsc minuto 20
  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil">
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
