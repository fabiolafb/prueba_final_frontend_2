//import Context from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CondominioProvider } from "./Context";

// views
import Home from "./views/Home";
import InicioSesion from "./views/InicioSesion";
import Registro from "./views/Registro";
import HomePrivado from "./views/HomePrivado";
import Tienda from "./views/Tienda";
import DetalleProducto from "./views/DetalleProducto";
import Favoritos from "./views/Favoritos";
import Perfil from "./views/Perfil";
import MisDatos from "./views/MisDatos";
import EdicionDatos from "./views/EdicionDatos";

export default function App() {
  return (
    <div className="App">
      <CondominioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/homePrivado" element={<HomePrivado />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/perfil-usuario" element={<Perfil />} />
            <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/mis-datos" element={<MisDatos />} />            
            <Route path="/edicion-datos" element={<EdicionDatos />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </CondominioProvider>
    </div>
  );
};


