import React from "react" ; 

function Producto (props) {
    return ( 
        <div>
            <h1> Nombre del producto: {props.nombreProducto} </h1>
            <h2>Precio del producto: {props.precio} </h2>
        </div>
    );
}
export default Producto;