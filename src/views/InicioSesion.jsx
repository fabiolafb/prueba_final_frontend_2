import Context from "../Context";
import { Form } from "react-bootstrap";
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
    setAutenticado,
  } = useContext(Context);

  const navigate = useNavigate();

  /* Función Inicio Sesión */
  const handleLogin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    if (!email && !password) {
      alert("Por favor complete ambos campos");
    } else {
      const usuarioEncontrado = usuarios.find((e) => e.email === email);
      if (usuarioEncontrado !== undefined) {
        if (usuarioEncontrado.password == password) {
          setAutenticado(true);
          setUserLogin(usuarioEncontrado);
          navigate('/home-perfil')
        } else {
          alert('Datos de acceso incorrectos');
        }
      } else {
        alert('Esa dirección de correo no está registrada');
      }
    }
  };


  
  // const handleLogin = () => {
  //   const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.password == password);
  //   if (!email && !password) {
  //     alert("Por favor complete ambos campos")
  //   }
  //   if (usuarioEncontrado) {
  //     setAutenticado(true);
  //     navigate("/home-perfil");
  //  } else {
  //     window.alert("Datos de acceso incorrectos")
  //  }
  // };

  return (
    <>
      <Navbar />
      <div className="contenedor-inicio-sesion">
        <Form id="form-inicio-sesion"
        // onSubmit={handleLogin} 
        >
          <h4>Iniciar Sesión</h4>
          <div>
            <label>Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="correo@example.com"
              required
              // value={email}
              // onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Contraseña</label>
            <input
              
              type="password"
              id="pass"
              className="form-control"
              placeholder="Ingresar contraseña"
              required
              // value={password}
              // onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          {/* {error ? <p className="error" class="alerta" > <i>Debes llenar ambos campos</i></p> : null}  */}
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
        </Form>
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
