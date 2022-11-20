// Componentes
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// Estilos
import "../assets/css/navbar.css";
import logo from "../assets/img/logo_3.png";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavbarPublic() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        id="id-nav-public"
        className="navbar navbar-expand-lg ps-5"
      >
        <Navbar.Brand className="">
          <NavLink to="/">
            <img alt="" src={logo} width="150" className="logo ms-auto" />
          </NavLink>
        </Navbar.Brand>

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
    </>
  );
}
