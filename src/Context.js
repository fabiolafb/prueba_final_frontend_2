import { createContext, useState, useEffect } from "react";

const Context = createContext();

// Provider con funciones de datos
const CondominioProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  //const [sumarCarrito, setSumarCarrito] = useState([]);
  // Asignar estado para input de  búsqueda -- Tienda
  const [buscando, setBuscando] = useState("");
  // Asignar estado para filtro por categoria de productos -- Tienda
  const [filtradoCategoria, setFiltradoCategoria] = useState("");
  // Asignar estado para ordenar por precio productos -- Tienda
  const [ordenPrecio, setOrdenPrecio] = useState("");
  // Asignar estado para ordenar por nombre productos -- Tienda
  const [nombresOrdenados, setNombresOrdenados] = useState("");


  //Función que llama a la API
  const url = "/productos.json";

  const obtenerProductos = async () => {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

 

  return (
    <Context.Provider
      value={{
        productos, setProductos,
        buscando, setBuscando,
        filtradoCategoria, setFiltradoCategoria,
        ordenPrecio, setOrdenPrecio,
        nombresOrdenados, setNombresOrdenados,
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
