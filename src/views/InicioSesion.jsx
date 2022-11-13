import React from "react";
import Context from "../Context";
import { useContext } from "react";
import "../assets/css/inicioSesion.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useForm } from "react-hook-form";

export default function InicioSesion() {
  const {
    usuarios, setUsuarios,
    // email,
    // setEmail,
    // password,
    // setPassword,
  } = useContext(Context);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const login = (email, password) => {
  //   if (email === "fabitafb@gmail.com" && password === 'test'); {
  //     alert('Login correcto');
  //  } else {alert('Login incorrecto');}
  // };

  //  const handleLogin = (ev) => {
  //     ev.preventDefault()
  //   console.log('submit sesion')
  //  }



  // const iniciarSesion = (email, password) => {
  //   console.log(data);
  //   e.target.reset()
  //   const usuarioEncontrado = usuarios.find((e) e.email === email && e.password === password)
  // };

  return (
    <>
      <Navbar />
      <div className="contenedor-iniciosesion">
        <form
          // onSubmit={handleSubmit(iniciarSesion)}
          id="form-inicio-sesion"
          // onChange={handleLogin}

          // onSubmit={(ev) => {
          //   ev.preventDefault();
          //   login(email, password);
          // }}
        >
          <h4>Iniciar Sesión</h4>
          <div>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="correo@example.com"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              // value={email}
              // onChange={(ev) => setEmail(ev.target.value)}
            />
            {errors.email?.type === "required" && (
              <p className="errors-is">Debes ingresar tu correo electrónico</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errors-is">El formato de correo no corresponde</p>
            )}
          </div>
          <br />
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Ingresar contraseña"
              {...register("password", {
                required: true,
                maxLength: 4,                
              })}
              // value={password}
              // onChange={(ev) => setPassword(ev.target.value)}
            />
            {errors.password?.type === "required" && (
              <p className="errors-is">Debes ingresar tu contraseña</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="errors-is">
                La contraseña debe ser de 4 caracteres
              </p>
            )}
          </div>
          <br />
          <Link to="/home-perfil">
          <button
            className="btn-inicio-sesion"
            // onClick={() => agregarCarrito(producto)}
            data-toggle="tooltip"
            data-placement="top"
            title="Iniciar Sesión"
            // onClick={onSubmit}
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
