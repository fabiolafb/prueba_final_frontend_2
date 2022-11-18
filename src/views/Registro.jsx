import Context from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/registro.css";
import Navbar from "../components/Navbar";
import { nanoid } from "nanoid";

export default function Registro() {
  const { usuarios, setUsuarios } =
    useContext(Context);
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

          <form
            // onSubmit={handleSubmit(sendRegistro)}
            id="container-form"
          >
            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="reNombre"
                  // {...register("nombre", { required: true })}
                  name="nombre"
                  placeholder=""
                  required
                />
                {/* {errors.nombre?.type === "required" && (
                  <p className="errors-re">Debes ingresar tu nombre</p>
                )} */}
              </div>
              <div className="label-input">
                <label className="is-required">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="reApellido"
                  // {...register("apellido", { required: true })}
                  name="apellido"
                  placeholder=""
                  required
                />
                {/* {errors.apellido?.type === "required" && (
                  <p className="errors-re">Debes ingresar tu apellido</p>
                )} */}
              </div>
            </div>

            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="reEmail"
                  // {...register("email", {
                  //   required: true,
                  //   pattern: /\S+@\S+\.\S+/,
                  // })}
                  name="correo"
                  placeholder=""
                  required
                />
                {/* {errors.email?.type === "required" && (
                  <p className="errors-re">
                    Debes ingresar tu correo electrónico
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="errors-re">
                    El formato de correo no corresponde
                  </p>
                )} */}
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
                  // {...register("nro", {
                  //   required: false,
                  //   minLength: 9,
                  //   maxLength: 9,
                  // })}
                  placeholder="+569"
                />
                {/* {errors.nro?.type === "minLength" && (
                  <p className="errors-re">
                    El número de teléfono debe contener 9 dígitos
                  </p>
                )}
                {errors.nro?.type === "maxLength" && (
                  <p className="errors-re">
                    El número de teléfono debe contener 9 dígitos
                  </p>
                )} */}
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
                  // {...register("password", {
                  //   required: true,
                  //   minLength: 4,
                  //   maxLength: 4,
                  // })}
                  name="rePass1"
                  placeholder="Contraseña"
                  required
                />
                {/* {errors.password?.type === "required" && (
                  <p className="errors-re">Debes ingresar una constraseña</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="errors-re">
                    La contraseña debe ser de máximo 4 caracteres
                  </p>
                )} */}
              </div>

              <div className="label-input">
                <label className="is-required">Repetir contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="rePass2"
                  // {...register("pass", {
                  //   required: true,
                  //   minLength: 4,
                  //   maxLength: 4,
                  // })}
                  name="rePass2"
                  placeholder="Repetir contraseña"
                  required
                />
                {/* {errors.password?.type === "required" && (
                  <p className="errors-re">Debes repetir la contraseña</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="errors-re">
                    La contraseña debe ser de máximo 4 caracteres
                  </p>
                )} */}
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
                  // {...register("tienda", { required: false })}
                  // name="tienda"
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

/*------FUNCION USEFORM----- */

//   const { register, formState: { errors }, handleSubmit, } = useForm();

//   const sendRegistro = (data, e) => {
//     e.preventDefault();
//     e.target.reset();
//     setUsuariosNuevos(...usuarios);

//     setUsuarios([...usuarios, data, { id: nanoid()}]);
//     console.log(setUsuariosNuevos);

//   };

//   for (let i = 0; i < usuarios.length; i++) {
//     const element = usuarios[i]
//     element.id = i
// }
// console.log(usuarios)

// for (var i = 0; i < usuarios; i++) {
//   usuarios[i].nuevobooleano = true;
// }
