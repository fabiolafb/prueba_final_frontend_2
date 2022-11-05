import "../assets/css/tienda.css";
import Context from "../Context";
import { useContext } from "react";
import NavbarPrivado from "../components/NavbarPrivado";
import CardCatalogo from "../components/CardCatalogo";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Tienda() {
  const { buscando, setBuscando, filtradoCategoria, setFiltradoCategoria  } = useContext(Context);

  return (
    <>
      <NavbarPrivado />
      <main className="container-tienda">
        <header className="barra-superior-tienda">
          <div className="nav-name-seccion">
            <div class="card-superior">
              <h5 class="card-text">TIENDA</h5>
            </div>
          </div>

          <div class="nav-superior">
            <div className="buscador_div">
              <input
                type="text"
                className="buscador_input"
                placeholder=" Ingresa búsqueda       🔍"
                value={buscando}
                onChange={(e) => {
                  setBuscando(e.target.value);
                }}
              />
              <Link to="/favoritos" id="id-favoritos">
                {" "}
                <Button variant="outline-secondary">Ir a favoritos</Button>{" "}
              </Link>

              <Link to="/perfil-usuario" id="id-perfil">
                <Button variant="warning" >Mi perfil</Button>{" "}
              </Link>
            </div>
          </div>
        </header>

        <div className="contenedor-inferior">
          <nav className="barra-lateral">
            <div>
              <Form.Select
                aria-label="Default select example"
                className="select_input"
                onChange={(e) => setFiltradoCategoria(e.target.value)}
                value={filtradoCategoria}
              >
                <option value="">Categorías</option>
                <option value="Alimentación">Alimentación</option>
                <option value="Entretención">Entretención</option>
                <option value="Hogar">Hogar</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Vestuario">Vestuario</option>
              </Form.Select>
            </div>
            <hr />
          </nav>
          <CardCatalogo />
        </div>
        <br />        
      </main>
    </>
  );
}
