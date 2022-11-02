import "../assets/css/home.css";
import img_home from "../assets/img/img_home.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
      <div className="contenedor-home">
        <div className="div-txt">
          <h1>¿Qué es Condominio Ventas?</h1>
          <p>
            Es una plataforma online disponible para que cada uno de quienes integran esta comunidad puedan comprar o vender productos de una manera confiable y fácil.
          </p>
          <p><span ><b><Link to="/registro" id="id-registro">Regístrate</Link></b></span> si entras por primera vez y disfruta de este útil espacio.
          </p>
          <h3>
            <b id="slogan">¡Juntos hacemos un condominio mejor!</b>
          </h3>
        </div>
        <div className="div-img-home">
          <img alt="" src={img_home} className="img_home" />
        </div>
      </div>

    </>
  );
}
