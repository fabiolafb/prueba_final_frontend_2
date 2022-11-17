import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/css/notFound.css";
import logo from "../assets/img/logo_3.png";
export default function NotFound() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        id="id-nav-public"
        style={{ height: 90 }}
        className="navbar navbar-expand-lg ps-5"
      >
        {/* <Navbar.Brand className="">
          <NavLink to="/">
            <img alt="" src={logo} width="150" className="logo ms-auto" />
          </NavLink>
        </Navbar.Brand> */}

        <Navbar.Toggle
          id="id-navbar-toggle"
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle me-5"
        />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="navbar-collapse pe-5"
        >
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link-public" id="iniciosesion">
              Iniciar Sesión
            </Link>
            <Link to="/registro" className="nav-link-public" id="registro-nav">
              Regístrate
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="notfound" id="notregister">
        <h3 className="mb-4">
          {" "}
          Para acceder a esa ruta debes <span style={{ color: "#44BBA4" }}>Iniciar Sesión</span>  o <span style={{ color: "#E7BB41" }}>Registrarte{" "}</span> 
        </h3>

        <div to="/" style={{ color: "black", fontSize: "1.1rem" }}>
          <h4>Sigue los accesos de la parte superior</h4>
        </div>
        <Link to="/">
          <img alt="" src={logo} width="300" className="img ms-auto" />
        </Link>
      </Container>
    </>
  );
}
