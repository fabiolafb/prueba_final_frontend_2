import React from "react";
import "../assets/css/menuPerfil.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function MenuPerfil() {
  return (
    <>
      <main className="container-perfil">
        <header>
          <div className="barra-superior-perfil">
            <div className="nav-name-seccion">
              <div class="card-superior-perfil">
                <Link to="/perfil-usuario" id="id-perfil-usuario">
                  <h5 class="card-text">Mi PERFIL</h5>
                </Link>
              </div>
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
                <Link to="/agregar-producto">
                  <li>Crear publicación</li>
                </Link>
              </ul>
            </nav>
            <div id="id-tienda-perfil">
            <Link to="/tienda" id="id-tienda">
              <Button variant="success">Ir a Tienda</Button>
            </Link>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
