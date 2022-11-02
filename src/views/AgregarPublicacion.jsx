import "../assets/css/agregarPublic.css";
import NavbarPrivado from "../components/NavbarPrivado";
import MenuPerfil from "../components/MenuPerfil";
import { Form } from "react-bootstrap";

const AgregarPublicacion = () => {
  return (
    <>
      <NavbarPrivado />
      <MenuPerfil />
      <div className="container-add-publicacion">       
      <main className="div-main">
          <h4>Agregar publicación</h4>
          <h5>
            Los campos marcados con (<span id="asterisco">*</span>) son obligatorios.
          </h5>

          <div className="columnas-form">
            <div className="label-imput-prod">
              <label className="is-required">Nombre del producto</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
            <div className="label-imput-prod">
              <label className="is-required">Precio</label>
              <input
                type="text"
                name="price"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
          </div>

          <div className="columnas-form">
            <div className="label-imput-prod">
              <label className="is-required">Seleccione una categoría</label>
              <Form.Select
                aria-label="Default select example"
                className="select_input_cat"
                // onChange={(e) => setFiltradoFeriados(e.target.value)}
                // value={filtradoFeriados}
              >
                <option value="">Categorías</option>
                <option value="1">Alimentación</option>
                <option value="2">Entretención</option>
                <option value="3">Hogar</option>
                <option value="4">Tecnología</option>
                <option value="5">Vestuario</option>
              </Form.Select>
            </div>
            <div className="label-imput-prod">
              <label className="is-required">Imagen del prorducto</label>
              <input
                type="img"
                name="img"
                className="form-control"
                required
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
          </div>


          <div className="columnas-form" id="id-columnas-form">
            <div className="label-imput-prod">
              <label className="is-required">
                Descripción del producto
              </label>
              <input
                type="text"
                name="desc"
                className="form-control"
                id="form-control-desc"
                placeholder=""
                // onChange={(e) => setEmailColaborador(e.target.value)}
                // value={emailColaborador}
              />
            </div>
            <div className="label-imput-prod">
              <button
                className="btn-publicacion"
                // onClick={() => agregarCarrito(pizza)}
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar publicación"
              >
                Guardar publicación
              </button>
            </div>
          </div>
          <br />
        </main>
      </div>
    </>
  );
};

export default AgregarPublicacion;