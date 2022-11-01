import React from "react";
import "../assets/css/registro.css";
import Navbar from "../components/Navbar";

export default function Registro() {
  return (
    <>
     <Navbar />
      <div className="contenedor-registro">
        <section className="div-section">
          <h4>Registro de usuario</h4>
          <h5>Los campos marcados con (<span id="ast">*</span>) son obligatorios.</h5>

          <div className="columnas-form">
            <div className="label-imput">
              <label className="is-required">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
            <div className="label-imput">
              <label className="is-required">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
          </div>

          <div className="columnas-form">
            <div className="label-imput">
              <label className="is-required">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
            <div className="label-imput">
              <label className="">
                Teléfono de contacto <i>(opcional)</i>
              </label>
              <input
                type="text"
                name="numero-contacto"
                className="form-control"
                placeholder="+569"
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
          </div>
          <div className="columnas-form">
            <div className="label-imput">
              <label className="is-required">Contraseña</label>
              <input
                type="password"
                name="pass"
                className="form-control"
                requiered
                placeholder="*****"
                // onChange={(e) => setPass(e.target.value)}
                // value={pass}
              />
            </div>
            <div className="label-imput">
              <label className="is-required">Repetir Contraseña</label>
              <input
                type="password"
                name="pass"
                className="form-control"
                requiered
                placeholder="*****"
                // onChange={(e) => setPass(e.target.value)}
                // value={pass}
              />
            </div>
          </div>

          <div className="columnas-form" id="id-columnas-form">
            <div className="label-imput">
              <label className="">
                Nombre de negocio o tienda <i>(opcional)</i>
              </label>
              <input
                type="text"
                name="negocio"
                className="form-control"
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
            <div className="label-imput">
            <button
              className="btn-registro"
              // onClick={() => agregarCarrito(pizza)}
              data-toggle="tooltip"
              data-placement="top"
              title="Guardar registro"
            >
              Registrarse
            </button>
            </div> 
          </div>
          <br />
        </section>
      </div>
    </>
  );
}
