import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useCallback, useState } from "react";
import Context from "./Context";

/* Componentes */
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";

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
  const { newUser, autenticado, userLogin } = useContext(Context);

  /* Componente ruta privada */
  const PrivateRoute = useCallback(
    ({ children }) => {
      return newUser ? children : <Navigate to="/notregister" />;
    },
    [newUser]
  );

    /* Componente ruta privada */
    const PublicRoute = useCallback(
      ({ children }) => {
        return !newUser ? children : <Navigate to="/home-perfil "/>;
      },
      [newUser]
    );
  

  return (
    <div className="App">
      {/* <AuthContexProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute><InicioSesion /></PublicRoute>} />
          <Route path="/registro" element={<PublicRoute><Registro /></PublicRoute>} />

          <Route
            path="/home-perfil"
            element={
              <PrivateRoute>
                <HomePrivado />
              </PrivateRoute>
            }
          />
          <Route
            path="/tienda"
            element={
              <PrivateRoute>
                <Tienda />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil-usuario"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route
            path="/detalleproducto/:id"
            element={
              <PrivateRoute>
                <DetalleProducto />
              </PrivateRoute>
            }
          />
          <Route
            path="/favoritos"
            element={
              <PrivateRoute>
                <Favoritos />
              </PrivateRoute>
            }
          />
          <Route
            path="/mis-datos"
            element={
              <PrivateRoute>
                <MisDatos />
              </PrivateRoute>
            }
          />
          <Route
            path="/edicion-datos"
            element={
              <PrivateRoute>
                <EdicionDatos />
              </PrivateRoute>
            }
          />
          <Route
            path="/mis-publicaciones"
            element={
              <PrivateRoute>
                <Publicaciones />
              </PrivateRoute>
            }
          />
          <Route
            path="/agregar-producto"
            element={
              <PrivateRoute>
                <AgregarPublicacion />
              </PrivateRoute>
            }
          />
          {/* <Route path="/carrito" element={<Carrito />} /> */}

          <Route path="*" element={<NotFound />} />
          <Route path="/notregister" element={<NotRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* </AuthContexProvider> */}
    </div>
  );
}
