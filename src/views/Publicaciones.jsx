// import Context from "../Context";
// import { useContext } from "react";
import "../assets/css/publicaciones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import MenuPerfil from "../components/MenuPerfil";
import NavbarPrivado from "../components/NavbarPrivado";
import ajedrez from "../assets/img/products/ajedrez.jpg";
import reloj_mujer from "../assets/img/products/reloj_mujer.jpg";


const Publicaciones = () => {
  // const { userLogin, setUserLogin, productos, setProductos, } = useContext(Context);

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
                <div>Producto</div>
                <div>Ir al detalle</div>
                <div></div>
            </div>

            <hr />

            <div className="contain-publicacion">
                 <img alt="" src={ajedrez} 
                 className="img-lista" />
                 <h5>Juego de Ajedrez     </h5>
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
            </div>
            <hr />
            <div className="contain-publicacion">
                 <img alt="" src={reloj_mujer} 
                 className="img-lista" />
                 <h5>Reloj smartwach mujer</h5>
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
            </div>
            <hr />
          </div>
        </main>
      </main>
    </>
  );
};

export default Publicaciones;
