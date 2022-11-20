// Componentes
import Context from "../Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// Estilos
import "../assets/css/navbarPrivado.css";
import logo from "../assets/img/logo_3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function NavbarPrivate() {
  const { userLogin, setAutenticado } = useContext(Context);

  // Función para cerrar sesión Logout
  const navigate = useNavigate();

  const handleLogout = (usuarioEncontrado) => {
    if (usuarioEncontrado) {
      setAutenticado(false);
      navigate("/");
    }
  };

  let sum = 0;

  return (
    <>
      <Navbar
        id="id-nav-private"
        className="navbar navbar-expand-lg"
        collapseOnSelect
      >
        <div id="id-container-fluid" className="container-fluid ps-5">
          <Link to="/" className="navbar-brand">
            <img alt="" src={logo} width="140" className="logo_privado" />
          </Link>
        </div>

        <div id="id-container-fluid" className="container-select">
          <div className="mt-3" style={{ color: "#707070" }}>
            <h6>Hola {userLogin.nombre}</h6>
          </div>
          <div className="nav-item">
            <Link to="/perfil-usuario" className="nav-link-priv">
              <FontAwesomeIcon
                icon={faUser}
                id="img_nav"
                data-toggle="tooltip"
                data-placement="top"
                title="Mi perfil"
              />
            </Link>
          </div>

          <div className="nav-item">
            <Link id="nav-link-signout" className="nav-link-priv" to="/">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                id="img_nav"
                data-toggle="tooltip"
                data-placement="top"
                title="Cerrar sesión"
                onClick={handleLogout}
              />
            </Link>
          </div>
        </div>
      </Navbar>
    </>
  );
}
