//Ejecicio nº1

// import React from "react";
// import Saludo from "./Punto1-saludo"; 

// function App() {
//   return (
//     <div>
//       <Saludo nombre="Karla" />
//     </div>
//   );
// }

// export default App;
 
// //Ejercicio Nº2

// import React from "react";
// import Producto  from "./Punto2-producto";

// function App () {
//   return (
//     <div>
//       <Producto nombreProducto= "Xiaomi Redmi Note 13 Pro 4g 256gb / 8gb Ram Púrpura." precio= "$  819.900"/>
//       <Producto nombreProducto= "Consola Xbox Series X" precio= "$  2.499.900"/>
//     </div>
//   );
// }
// export default App; 

//Ejercicio Nº3 

// import React from "react";
// import ContadorFuncional from "./Punto3-ContadorFuncional";
// function App () {
//   return (
//     <div>
//       <ContadorFuncional/>
//     </div>
//   );
// }
// export default App

//Ejercicio Nº3.1
// import React from "react";
// import ContadorClase from "./Punto3.1-ContadorClase";
// function App () {
//   return(
//   <div>
//     <ContadorClase/>
//   </div>
//   );
// }
// export default App 

//Ejercicio Nº4

// import React from "react";
// import ListaProductos from "./Punto4-ListaProductos";

// function App() {


//   return (
//     <div>
//       <h1>Listado de productos</h1>
//       <br />
//       <ListaProductos/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import DetalleProducto from "./Punto5-DetalleProducto";
function App () {
  return (
    <div>
      <DetalleProducto 
      nombre="Celular Xiaomi"
      precio="$850.000"
      descripcion= "8gb de ram"
      />
      <DetalleProducto
      nombre="Xbox Series"
      precio= "$2.499.900"
      descripcion="Consola de video juegos"
      />
    </div>
  );
}
export default App; 