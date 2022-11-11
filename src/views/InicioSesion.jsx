import React from "react";
import "../assets/css/inicioSesion.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Context from "../Context";
import { useContext } from "react";


export default function InicioSesion() {
const { 
  // usuarios, setUsuarios, 
  email, setEmail, password, setPassword } = useContext(Context)

  // const login = (email, password) => {
  //   if (email === "fabitafb@gmail.com" && password === 'test'); {
  //     alert('Login correcto');
  //  } else {alert('Login incorrecto');}
  // }; 

//  const handleLogin = (ev) => {
//     ev.preventDefault()
//   console.log('submit sesion')
//  }

  return (
    <>
      <Navbar />
      <div className="contenedor-iniciosesion">
        <form id="form-inicio-sesion"
          // onChange={handleLogin}

          // onSubmit={(ev) => {
          //   ev.preventDefault();
          //   login(email, password);
          // }}
        >
          <h4>Iniciar sesión</h4>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="correo@example.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <br />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresar contraseña"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />

          <br />
          <Link to="/home-perfil">
          <button
              className="btn-inicio-sesion"
              // onClick={() => agregarCarrito(producto)}
              data-toggle="tooltip"
              data-placement="top"
              title="Iniciar Sesión"
            >
              Iniciar sesión
            </button></Link>
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
