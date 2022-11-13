import "../assets/css/publicaciones.css";
import NavbarPrivado from "../components/NavbarPrivado";
import ajedrez from "../assets/img/products/ajedrez.jpg";
// import trash from "../assets/img/trush.png";
import MenuPerfil from "../components/MenuPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


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
                 <FontAwesomeIcon
                icon={faTrash}
                className="img-trash"                  data-toggle="tooltip"
                    data-placement="top"
                    title="Eliminar publicación" 
              />
                 {/* <img alt="" src={trash} className="img-trash"                  data-toggle="tooltip"
                    data-placement="top"
                    title="Eliminar publicación" /> */}
            </div>
            <hr />
            
          </div>
        </main>
      </main>
    </>
  );
};

export default Publicaciones;
