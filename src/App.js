import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useCallback } from "react";
import Context from "./Context";

/* Componentes */
import Footer from "./components/Footer";

/* Views */
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
import Publicaciones from "./views/Publicaciones";
import AgregarPublicacion from "./views/AgregarPublicacion";
import NotFound from "./views/NotFound";
import NotRegister from "./views/NotRegister";


export default function App() {
  const { autenticado } = useContext(Context);

 /* Views */
  const PrivateRoute = useCallback(
    ({ auten: { autenticado }, children }) => {
      return autenticado ? children : <Navigate to="/notregister" />;
    },
    [autenticado]
  );


    /* Componente ruta privada */
    // const PublicRoute = useCallback(
    //   ({ children }) => {
    //     return !autenticado ? children : <Navigate to="/home-perfil "/>;
    //   },
    //   [autenticado]
    // );
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />

          <Route
            path="/home-perfil"
            element={
              <PrivateRoute auten={{ autenticado }}>
                {" "}
                <HomePrivado />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/tienda"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <Tienda />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil-usuario"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route
            path="/detalleproducto/:id"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <DetalleProducto />
              </PrivateRoute>
            }
          />
          <Route
            path="/favoritos"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <Favoritos />
              </PrivateRoute>
            }
          />
          <Route
            path="/mis-datos"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <MisDatos />
              </PrivateRoute>
            }
          />
          <Route
            path="/edicion-datos"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <EdicionDatos />
              </PrivateRoute>
            }
          />
          <Route
            path="/mis-publicaciones"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <Publicaciones />
              </PrivateRoute>
            }
          />
          <Route
            path="/agregar-producto"
            element={
              <PrivateRoute auten={{ autenticado }}>
                <AgregarPublicacion />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/notregister" element={<NotRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
