import { createContext, useState, useEffect } from "react";

const Context = createContext();

// Provider con funciones de datos
const CondominioProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  // Estado con usuarios iniciales
  const [usuarios, setUsuarios] = useState([]);
  // Estado con usuarios nuevos registrados
  const [usuariosNuevos, setUsuariosNuevos] = useState([]);
  
  // Asignar estado para input de  búsqueda -- Tienda
  const [buscando, setBuscando] = useState("");
  // Asignar estado para filtro por categoria de productos -- Tienda
  const [filtradoCategoria, setFiltradoCategoria] = useState("");

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
//const [sumarCarrito, setSumarCarrito] = useState([]);

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
    const data = await res.json();
    //console.log(data);
    setUsuarios(data);
  };

  useEffect(() => {
    obtenerProductos();
    obtenerUsuarios();
  }, []);

 
  return (
    <Context.Provider
      value={{
        productos, setProductos,
        usuarios, setUsuarios,
        usuariosNuevos, setUsuariosNuevos,
        email, setEmail,
        password, setPassword,
        buscando, setBuscando,
        filtradoCategoria, setFiltradoCategoria
        // sumarCarrito,
        // setSumarCarrito,
        // agregarCarrito,
        // agregar,
        // quitar,
        // vaciarCarrito,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Export del provider
export { CondominioProvider };

export default Context;
