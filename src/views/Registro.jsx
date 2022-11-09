import "../assets/css/registro.css";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

export default function Registro() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

          <form onSubmit={handleSubmit(onSubmit)} className="columnas-form">
            <div className="label-input">
              <label className="is-required">Nombre</label>
              <input
                type="text"
                className="form-control"
                {...register("nombre", { required: true })}
                // name="nombre"
                placeholder=""
              />
              {errors.nombre?.type === "required" && <p className="errors">Debes ingresar tu nombre</p>}
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
              {errors.apellido?.type === "required" && <p className="errors">Debes ingresar tu apellido</p>}
            </div>           
          </form>

          <form onSubmit={handleSubmit(onSubmit)} className="columnas-form">
            <div className="label-input">
              <label className="is-required">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                // name="correo"
                placeholder=""
              />
              {errors.email?.type === "required" && <p className="errors">Debes ingresar tu correo electrónico</p>}
              {errors.email?.type === "pattern" && <p className="errors">El formato de correo no corresponde</p>}
            </div>

            <div className="label-input">
              <label className="is-required">
                Teléfono de contacto 
              </label>
              <input
                type="txt"
                {...register("nro", { required: true, minLength: 9, maxLength: 9 })}
                name="numero-contacto"
                className="form-control"
                placeholder="+569"
              />
              {errors.email?.type === "required" && <p className="errors">Debes ingresar un teléfono de contacto</p>}
              {errors.nro?.type === "minLength" && <p className="errors">El número de teléfono debe contener 8 dígitos</p>}
              {errors.nro?.type === "maxLength" && <p className="errors">El número de teléfono debe contener 8 dígitos</p>}
            </div>
          </form>

          <form onSubmit={handleSubmit(onSubmit)} className="columnas-form">
            <div className="label-input">
              <label className="is-required">Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("pass", { required: true, minLength: 4, maxLength: 4 })}
                // name="pass"
                placeholder="****"
              />
              {errors.pass?.type === "maxLength" && <p className="errors">La contraseña debe ser de máximo 4 caracteres</p>}
            </div>

            <div className="label-input">
              <label className="is-required">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("pass", { required: true, maxLength: 4, })}
                // name="pass"
                placeholder="****"
              />
              {errors.pass?.type === "maxLength" && <p className="errors">La contraseña debe ser de máximo 4 caracteres</p>}
            </div>
          </form>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="columnas-form"
            id="id-columnas-form"
          >
            <div className="label-input">
              <label className="">
                Nombre de negocio o tienda <i>(opcional)</i>
              </label>
              <input
                type="text"
                className="form-control"
                {...register("tienda")}
                // name="tienda"
                placeholder=""
              />
            </div>

            <div className="label-input">
              <button
                className="btn-registro"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar registro"
              >
                Registrarse
              </button>
            </div>
          </form>
          <br />
        </section>
      </div>
    </>
  );
}
