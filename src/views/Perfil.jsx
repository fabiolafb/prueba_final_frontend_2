import React from "react";
import "../assets/css/perfil.css";
import NavbarPrivado from "../components/NavbarPrivado";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import icon_edit from "../assets/img/icon_edit.jpg";
import icon_form from "../assets/img/icon_form.png";
import icon_heart from "../assets/img/icon_heart.png";

export default function Perfil() {
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
                  <li>Agregar publicación</li>
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

        <main className="container-menu-perfil">
          <div className="container-menu-perfil-ordenar">
            <div className="container-imgs">
              <img alt="" src={icon_edit} className="icon_edit" />
              <img alt="" src={icon_form} className="icon_form" />{" "}
              <img alt="" src={icon_heart} className="icon_heart" />
            </div>

            <div className="container-texto">
              <h3 className="tittle-perfil">
                Bienvenid@,
                <br />
              </h3>
              <h5>
                En esta sección encontrarás todo lo relacionado a tu perfil.
                Podrás editar tus datos personales, revisar los productos
                favoritos, revisar tus publicaciones o bien crear una nueva
                publicación con el producto que quieras vender.{" "}
              </h5>
            </div>
          </div>
        </main>
      </main>
    </>
  );
}
