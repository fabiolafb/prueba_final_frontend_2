import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Context = createContext();

const CondominioProvider = ({ children }) => {

  // Estado que trae json productos
  const [productos, setProductos] = useState([]);
  // Estado que trae json usuarios iniciales
  const [usuarios, setUsuarios] = useState([]);

  // Estados para validar inicio de sesión
  const [userLogin, setUserLogin] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false); 
  const [newUser, setNewUser] = useState(false);
  // const [usuariosNuevos, setUsuariosNuevos] = useState([]);

  // Estados para filtros y búsqueda -- Tienda
  const [buscando, setBuscando] = useState("");
  const [filtradoCategoria, setFiltradoCategoria] = useState("");

  // Estado para agregar productos a carrito
  const [sumarCarrito, setSumarCarrito] = useState([]);

  //Función que llama a productos
  const url_p = "/productos.json";
  const obtenerProductos = async () => {
    const res = await fetch(url_p);
    const data = await res.json();
    //console.log(data);
    setProductos(data);
  };

  //Función que llama a usuarios
  const url_u = "/usuarios.json";
  const obtenerUsuarios = async () => {
    const res = await fetch(url_u);
    const usuarios = await res.json();
    //console.log(data);
    setUsuarios(usuarios);
  };

  useEffect(() => {
    obtenerProductos();
    obtenerUsuarios();
  }, []);

  // const cambiarForm = (bool) => {
  //   setIntro(bool);
  // };

//  --------------------------------------------

 /* Componente ruta privada */
//  const PrivateRoute = ({ auten: { autenticado }, children }) => {
//   return autenticado ? children : <Navigate to="/notregister" />;
// };

  //Función llenar carrito
  const agregarCarrito = ({ id, img, prodName, price }) => {
    const productoEncontradoIndex = sumarCarrito.findIndex((c) => c.id === id);
    const productoEncontrado = { id, img, prodName, price, count: 1 };
    console.log(productoEncontradoIndex)
    if (productoEncontradoIndex >= 0) {
      sumarCarrito[productoEncontradoIndex].count++;
      setSumarCarrito([...sumarCarrito]);
    } else {
      setSumarCarrito([...sumarCarrito, productoEncontrado]);
    }
  };
  
  //Función eliminar un prducto de carrito  
  const eliminarCarrito = (i) => {
    const { count } = sumarCarrito[i];
    if (count === 1) {
      sumarCarrito.splice(i, 1);
    } else {
      sumarCarrito[i].count--;
    }
    setSumarCarrito([...sumarCarrito]);
  };

  return (
    <Context.Provider
      value={{
        productos,
        setProductos,
        usuarios,
        setUsuarios,
        userLogin, 
        setUserLogin,
        email,
        setEmail,
        password,
        setPassword,
        // cambiarForm,
        // PrivateRoute,
        buscando,
        setBuscando,
        filtradoCategoria,
        setFiltradoCategoria,
        sumarCarrito,
        setSumarCarrito,
        agregarCarrito,
        eliminarCarrito,
        autenticado, setAutenticado,
        newUser, setNewUser,
        // usuariosNuevos, setUsuariosNuevos
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Export del provider
export { CondominioProvider };

export default Context;
