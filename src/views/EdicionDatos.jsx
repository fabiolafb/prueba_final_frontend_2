// Componentes
import Context from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MenuPerfil from "../components/MenuPerfil";
import NavbarPrivado from "../components/NavbarPrivado";
// Estilos
import "../assets/css/editardatos.css";


const EdicionDatos = () => {
  const { userLogin } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil">
        <main className="container-menu-editdatos">
          <div className="contain-misdatos" id="edicion-datos">
            <h4>Actualiza tus datos personales</h4>
            <div className="form-datos-personales">
              <h6>Nombre</h6>
              <input
                type="text"
                name="nombre"
                className="form-control sm"
                required
                placeholder="Nombre"
                defaultValue={userLogin.nombre}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Apellido</h6>
              <input
                type="text"
                name="apellido"
                className="form-control sm"
                required
                placeholder="Apellido"
                defaultValue={userLogin.apellido}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Correo eletrónico</h6>
              <input
                type="mail"
                name="mail"
                className="form-control sm"
                placeholder="email"
                defaultValue={userLogin.email}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Teléfono de contacto</h6>
              <input
                type="text"
                name="phone"
                className="form-control sm"
                required
                placeholder="+56"
                defaultValue={userLogin.nro}
              />
            </div>

            <div className="form-datos-personales">
              <h6>Nombre de negocio o tienda</h6>
              <input
                type="text"
                name="tienda"
                className="form-control sm"
                required
                placeholder=""
                defaultValue={userLogin.tienda}
              />
            </div>
            <div className="btns-guardar">
              <button
                variant="primary"
                className="btn-guardar"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar cambios"                
              >
                Guardar
              </button>

              <button
                variant="primary"
                className="btn-no-guardar"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar cambios"
                onClick={() => navigate(`/mis-datos`)}
              >
                Editar después
              </button>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default EdicionDatos;
