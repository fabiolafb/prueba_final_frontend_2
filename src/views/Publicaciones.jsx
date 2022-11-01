import React from "react";
import "../assets/css/publicaciones.css";
import NavbarPrivado from "../components/NavbarPrivado";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Publicaciones = () => {
  return (
    <>
      <NavbarPrivado />
      <main className="container-perfil">
        <header>
          <div className="barra-superior-perfil">
            <div className="nav-name-seccion">
              <Link to="/perfil-usuario" id="id-perfil-usuario">
                <div class="card-superior-perfil">
                  <h5 class="card-text">Mi PERFIL</h5>
                </div>
              </Link>
            </div>
            <nav id="id-nav-menu">
              <ul>
                <Link to="/mis-datos">
                  <li>Mis datos</li>
                </Link>

                <Link to="/favoritos">
                  <li>Mis favoritos</li>
                </Link>
                <Link to="/mis-publicaciones">
                  <li>Mis publicaciones</li>
                </Link>
                <Link to="/agregarproducto">
                  <li>Crear publicación</li>
                </Link>
              </ul>
            </nav>
            <div id="id-tienda-perfil">
              <Link to="/tienda">
                <Button variant="success">Ir a Tienda</Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container-menu-mispublicaciones">
 
        </main>
      </main>
    </>
  );
};

export default Publicaciones;