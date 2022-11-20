// Componentes
import Context from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { nanoid } from "nanoid";
// Estilos
import "../assets/css/registro.css";


export default function Registro() {
  const { usuarios, setUsuarios } = useContext(Context);
  const navigate = useNavigate();
  const sendRegistro = () => {
    let reNombre = document.getElementById("reNombre").value;
    let reApellido = document.getElementById("reApellido").value;
    let reEmail = document.getElementById("reEmail").value;
    let reNro = document.getElementById("reNro").value;
    let rePass1 = document.getElementById("rePass1").value;
    let rePass2 = document.getElementById("rePass2").value;
    let reTienda = document.getElementById("reTienda").value;

    if (
      reNombre !== "" &&
      reApellido !== "" &&
      reEmail !== "" &&
      rePass1 !== "" &&
      rePass2 !== ""
    ) {
      if (rePass1 === rePass2) {
        let existeMail = usuarios.filter((ex) => ex.email === reEmail);
        if (existeMail.length === 0) {
          setUsuarios([
            ...usuarios,
            {
              id: nanoid(),
              nombre: reNombre,
              apellido: reApellido,
              email: reEmail,
              nro: reNro,
              password: rePass1,
              tienda: reTienda,
              favorito: [],
            },
          ]);
          alert("Registrado con éxito");
          navigate("/login");
        } else {
          alert("Este correo ya está registrado");
        }
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert(
        "Debes completar al menos los campos obligatorios para registrarte"
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="contenedor-registro">
        <section className="div-section">
          <h4>Registro de usuario</h4>
          <h5>
            Los campos marcados con (<span id="ast">*</span>) son obligatorios.
          </h5>

          <form id="container-form">
            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="reNombre"
                  name="nombre"
                  placeholder=""
                  required
                />
              </div>
              <div className="label-input">
                <label className="is-required">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="reApellido"
                  name="apellido"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="reEmail"
                  name="correo"
                  placeholder=""
                  required
                />
              </div>

              <div className="label-input">
                <label className="">
                  Teléfono de contacto <i>(opcional)</i>
                </label>
                <input
                  type="number"
                  name="nro"
                  className="form-control"
                  id="reNro"
                  placeholder="+569"
                />
              </div>
            </div>

            {/* Password */}
            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="rePass1"
                  name="rePass1"
                  placeholder="Contraseña"
                  required
                />
              </div>

              <div className="label-input">
                <label className="is-required">Repetir contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="rePass2"
                  name="rePass2"
                  placeholder="Repetir contraseña"
                  required
                />
              </div>
            </div>

            <div className="columnas-form">
              <div className="label-input">
                <label className="">
                  Nombre de negocio o tienda <i>(opcional)</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reTienda"
                  name="tienda"
                  placeholder=""
                />
              </div>

              <div className="label-input" id="id-columnas-form">
                <input
                  type="submit"
                  value="Registrarse"
                  className="btn-registro"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Guardar registro"
                  onClick={sendRegistro}
                />
              </div>
            </div>
          </form>

          <br />
        </section>
      </div>
    </>
  );
}
