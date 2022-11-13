import { createContext, useState, useEffect } from "react";

const Context = createContext();

// Provider con funciones de datos
const CondominioProvider = ({ children }) => {
  // Estado que trae json productos
  const [productos, setProductos] = useState([]);
  // Estado que trae json usuarios iniciales
  const [usuarios, setUsuarios] = useState([]);
  // Estado con usuarios nuevos registrados
  const [usuariosNuevos, setUsuariosNuevos] = useState([]);

  // Estado para input de  búsqueda -- Tienda
  const [buscando, setBuscando] = useState("");
  // Estado para filtro por categoria de productos -- Tienda
  const [filtradoCategoria, setFiltradoCategoria] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const data = await res.json();
    //console.log(data);
    setUsuarios(data);
  };

  useEffect(() => {
    obtenerProductos();
    obtenerUsuarios();
  }, []);



  //Función llenar carrito
  const agregarCarrito = ({ id, img, prodName, price }) => {
    const productoEncontradoIndex = sumarCarrito.findIndex((c) => c.id === id);
    const productoEncontrado = { id, img, prodName, price, count: 1 };

    if (productoEncontradoIndex >= 0) {
      sumarCarrito[productoEncontradoIndex].count++;
      setSumarCarrito([...sumarCarrito]);
    } else {
      setSumarCarrito([...sumarCarrito, productoEncontrado]);
    }
  };
  
  //Función eliminar un prducto de carrito
  
  const eliminarCarrito = ({id}) => {
    const productoEncontradoIndex = sumarCarrito.find((el) => el.id === id);
    console.log(productoEncontradoIndex)
    sumarCarrito = sumarCarrito.filter((sumarCarritoID) =>     {
      return sumarCarritoID !== productoEncontradoIndex;
    })

  };

  return (
    <Context.Provider
      value={{
        productos,
        setProductos,
        usuarios,
        setUsuarios,
        usuariosNuevos,
        setUsuariosNuevos,
        email,
        setEmail,
        password,
        setPassword,
        buscando,
        setBuscando,
        filtradoCategoria,
        setFiltradoCategoria,
        sumarCarrito,
        setSumarCarrito,
        agregarCarrito,
        eliminarCarrito
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
