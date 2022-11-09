import React from "react";
import "../assets/css/inicioSesion.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function InicioSesion() {
  return (
    <>
      <Navbar />
      <div className="contenedor-iniciosesion">
        <form
          // onSubmit={(ev) => {
          //   ev.preventDefault();
          //   const email = ev.target.email.value;
          //   const password = ev.target.password.value;
          // }}
        >
          <h4>Iniciar sesión</h4>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingresar correo electrónico"
          />
          <br />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresar contraseña"
          />

          <br />
          <Link to="/homePrivado">
            <button
              className="btn-inicio-sesion"
              // onClick={() => agregarCarrito(producto)}
              data-toggle="tooltip"
              data-placement="top"
              title="Iniciar Sesión"
            >
              Iniciar sesión
            </button>
          </Link>
          <br />

          <div className="div-pregunta">
            <div>
              <p>¿No tienes cuenta?</p>{" "}
            </div>
            <div>
              <Link to="/registro" href="#pricing" id="link-registro">
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
