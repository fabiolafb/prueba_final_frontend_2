import React from "react";
import Context from "../Context";
// import AuthContexProvider from "../AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/inicioSesion.css";
import Navbar from "../components/Navbar";
//import { useForm } from "react-hook-form";

export default function InicioSesion() {
  const {
    usuarios,
    setUserLogin,
    email,
    setEmail,
    password,
    setPassword,
    setAutenticado, 
    setNewUser
  } = useContext(Context);

  const navigate = useNavigate();

  /* Función Inicio Sesión */ 
  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.password == password);
  
    if (usuarioEncontrado) {
      setUserLogin(usuarioEncontrado);
      setAutenticado(true) 
      setNewUser(true)
      navigate("/home-perfil")
   } else {
      window.alert("Datos de acceso incorrectos") 
   }

  }; 

  return (
    <>
      <Navbar />
      <div className="contenedor-inicio-sesion">
        <form 
        // onSubmit={handleLogin} 
        id="form-inicio-sesion">
          <h4>Iniciar Sesión</h4>
          <div>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="correo@example.com"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Ingresar contraseña"
              required
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn-inicio-sesion"
            data-toggle="tooltip"
            data-placement="top"
            title="Iniciar Sesión"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <br />

          <div className="div-pregunta">
            <div>
              <p>¿No tienes cuenta aún?</p>{" "}
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


  // const handleLogin = async (ev) => {
  //   ev.preventDefault();

  //   const usuarioEncontrado = usuarios.find(
  //     (usuario) => usuario.email === email && usuario.password == password
  //   );

  //   if (Object.entries(usuarioEncontrado).length > 0) {
  //     setUserLogin(usuarioEncontrado);
  //     setAutenticado(true);
  //     navigate("/home-perfil");
  //   } else  { 
  //     window.alert("Datos de acceso incorrectos");
  //   }
  // };