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
    // Asignar estado para ordenar por precio productos -- Tienda
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

  //Funcion que busca el índice del array que cambiará de false a true

  // //Función llenar carrito
  // const agregarCarrito = ({ id, img, name, price }) => {
  //   const pizzaEncontradaIndex = sumarCarrito.findIndex((c) => c.id === id);
  //   const pizzaEncontrada = { id, img, name, price, count: 1 };

  //   if (pizzaEncontradaIndex >= 0) {
  //     sumarCarrito[pizzaEncontradaIndex].count++;
  //     setSumarCarrito([...sumarCarrito]);
  //   } else {
  //     setSumarCarrito([...sumarCarrito, pizzaEncontrada]);
  //   }
  // };

  // //Función agregar o quitar pizzas
  // const agregar = (i) => {
  //   sumarCarrito[i].count++;
  //   setSumarCarrito([...sumarCarrito]);
  // };

  // const quitar = (i) => {
  //   const { count } = sumarCarrito[i];
  //   if (count === 1) {
  //     sumarCarrito.splice(i, 1);
  //   } else {
  //     sumarCarrito[i].count--;
  //   }
  //   setSumarCarrito([...sumarCarrito]);
  // };

  // //Función vaciar carrito
  // const vaciarCarrito = () => setSumarCarrito([]);

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
