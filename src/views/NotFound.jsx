// Componentes
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
// Estilos
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
      ></Navbar>

      <Container className="notfound">
        <h3 className="mb-4"> Lo sentimos, esta ruta no existe </h3>

        <div to="/" style={{ color: "black", fontSize: "1.1rem" }}>
          <h4>Regresa a </h4>
        </div>
        <Link to="/">
          <img alt="" src={logo} width="300" className="img ms-auto" />
        </Link>
      </Container>
    </>
  );
}
