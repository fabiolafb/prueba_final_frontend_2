import Context from "../Context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
import "../assets/css/registro.css";
import Navbar from "../components/Navbar";
// import { nanoid } from 'nanoid'

export default function Registro() {
  const { setUsuarios, usuariosNuevos, setUsuariosNuevos } =
    useContext(Context);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setUsuarios(...usuariosNuevos);
    setUsuariosNuevos([...usuariosNuevos, data]);
    console.log(usuariosNuevos);
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

          <form onSubmit={handleSubmit(onSubmit)} id="container-form">
            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nombre", { required: true })}
                  // name="nombre"
                  placeholder=""
                />
                {errors.nombre?.type === "required" && (
                  <p className="errors-re">Debes ingresar tu nombre</p>
                )}
              </div>
              <div className="label-input">
                <label className="is-required">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("apellido", { required: true })}
                  // name="apellido"
                  placeholder=""
                />
                {errors.apellido?.type === "required" && (
                  <p className="errors-re">Debes ingresar tu apellido</p>
                )}
              </div>
            </div>

            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                  // name="correo"
                  placeholder=""
                />
                {errors.email?.type === "required" && (
                  <p className="errors-re">
                    Debes ingresar tu correo electrónico
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="errors-re">
                    El formato de correo no corresponde
                  </p>
                )}
              </div>

              <div className="label-input">
                <label className="">
                  Teléfono de contacto <i>(opcional)</i>
                </label>
                <input
                  type="txt"
                  {...register("nro", {
                    required: false,
                    minLength: 9,
                    maxLength: 9,
                  })}
                  name="numero-contacto"
                  className="form-control"
                  placeholder="+569"
                />
                {/* {errors.nro?.type === "required" && (
                  <p className="errors">
                    Debes ingresar un teléfono de contacto
                  </p>
                )} */}
                {errors.nro?.type === "minLength" && (
                  <p className="errors-re">
                    El número de teléfono debe contener 8 dígitos
                  </p>
                )}
                {errors.nro?.type === "maxLength" && (
                  <p className="errors-re">
                    El número de teléfono debe contener 8 dígitos
                  </p>
                )}
              </div>
            </div>

            <div className="columnas-form">
              <div className="label-input">
                <label className="is-required">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                  })}
                  // name="password1"
                  placeholder="Contraseña"
                />
                {errors.password?.type === "maxLength" && (
                  <p className="errors-re">
                    La contraseña debe ser de máximo 4 caracteres
                  </p>
                )}
              </div>

              <div className="label-input">
                <label className="is-required">Repetir Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password-repeat", {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                  })}
                  // name="password2"
                  placeholder="Repetir contraseña"
                />
                {errors.password?.type === "maxLength" && (
                  <p className="errors-re">
                    La contraseña debe ser de máximo 4 caracteres
                  </p>
                )}
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
                  {...register("tienda", { required: false })}
                  // name="tienda"
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
                  onClick={onSubmit}
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
