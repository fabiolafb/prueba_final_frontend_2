// Componentes
import Context from "../Context";
import { useContext } from "react";
// Estilos
import "../assets/css/perfil.css";
import NavbarPrivado from "../components/NavbarPrivado";
import icon_edit from "../assets/img/icon_edit.jpg";
import icon_form from "../assets/img/icon_form.png";
import icon_heart from "../assets/img/icon_heart.png";
import MenuPerfil from "../components/MenuPerfil";


export default function Perfil() {
  const { userLogin } = useContext(Context);
  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <main className="container-perfil">
          <div className="container-menu-perfil">
            <div className="container-imgs">
              <img alt="" src={icon_edit} className="icon_edit" />
              <img alt="" src={icon_form} className="icon_form" />{" "}
              <img alt="" src={icon_heart} className="icon_heart" />
            </div>

            <div className="container-texto">
              <h3 className="tittle-perfil">
                Bienvenid@ <span style={{ color: "#E7BB41" }}><b>{userLogin.nombre}</b></span>,
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
    </>
  );
}
