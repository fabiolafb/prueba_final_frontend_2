import "../assets/css/tienda.css";
import Context from "../Context";
import { useContext } from "react";
import NavbarPrivado from "../components/NavbarPrivado";
import CardCatalogo from "../components/CardCatalogo";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tienda() {
  const {
    productos,
    setProductos,
    buscando,
    setBuscando,
    filtradoCategoria,
    setFiltradoCategoria,
  } = useContext(Context);

  //Función para ordenar productos (nombre, precio)
  const handlerOrdenarProductos = (e) => {
    let opcionOrdenar = e.target.value;
    if (opcionOrdenar === "ordenarNombre") {
      productos.sort((a, b) => a.prodName.localeCompare(b.prodName));
      setProductos([...productos]);
    } if (opcionOrdenar === "ordenarPrecio") {
      productos.sort((a, b) => a.price - b.price);
      setProductos([...productos]);
    } else if (opcionOrdenar === "ordenarPrecioD") {
      productos.sort((a, b) => b.price - a.price);
      setProductos([...productos]);
    }
  };

  return (
    <>
      <NavbarPrivado />
      <main className="container-tienda">
        <header className="barra-superior-tienda">
          <div className="nav-name-seccion">
            <div className="card-superior">
              <h5 className="card-text">TIENDA</h5>
            </div>
          </div>

          {/* función buscador y links favoritos y Mi perfil */}
          <div className="nav-superior">
            <div className="buscador_div">
              <input
                type="text"
                className="buscador_input"
                placeholder="Ingresa búsqueda         🔍"
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
                <Button variant="warning">Mi perfil</Button>{" "}
              </Link>
            </div>
          </div>
        </header>

        <div className="contenedor-inferior">
          <nav className="barra-lateral">
            {/* Funciones filtro por categoría y ordenar por: nombre o precio */}
            <div className="barra-lateral-filtros">
              <br />
              <h6>Filtrar por:</h6>
              <Form.Select
                aria-label="Default select example"
                className="select_input"
                onChange={(e) => setFiltradoCategoria(e.target.value)}
                value={filtradoCategoria}
              >
                <option value="">
                  Categorías
                </option>
                <option value="Alimentación">Alimentación</option>
                <option value="Entretención">Entretención</option>
                <option value="Hogar">Hogar</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Vestuario">Vestuario</option>
              </Form.Select>

              <h6>Ordenar por:</h6>
              <Form.Select
                aria-label="Default select example"
                className="select_input"
                onChange={handlerOrdenarProductos}
              >
                <option value="">Seleccione</option>
                <option value="ordenarNombre">Nombre</option>
                <option value="ordenarPrecio">
                  Precio (menor a mayor)
                </option>
                <option value="ordenarPrecioD">
                  Precio (mayor a menor)
                </option>
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
