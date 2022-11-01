import React from "react";
import "../assets/css/publicaciones.css";
import NavbarPrivado from "../components/NavbarPrivado";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ajedrez from "../assets/img/products/ajedrez.jpg";
import trush from "../assets/img/trush.png";
import MenuPerfil from "../components/MenuPerfil";


const Publicaciones = () => {
  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil">       
        <main className="container-menu-mispublicaciones">
          <div className="contain-mispublicaciones">
            <h4>Mis publicaciones</h4>
            <div id="menu-misprod">
                <div>Imagen</div>
                <div>Publicado por</div>
                <div>Ir al detalle</div>
                <div></div>
            </div>

            <hr />
            <div className="contain-publicacion">
                 <img alt="" src={ajedrez} className="img-lista" />
                 <h5>Vanesa Segovia</h5>
                 <button className="btn-ver-prod"
                 data-toggle="tooltip"
                 data-placement="top"
                 title="Ver producto"> Ver producto</button>
                 <img alt="" src={trush} className="img-trush"                  data-toggle="tooltip"
                    data-placement="top"
                    title="Eliminar publicación" />
            </div>
            <hr />
            
          </div>
        </main>
      </main>
    </>
  );
};

export default Publicaciones;
