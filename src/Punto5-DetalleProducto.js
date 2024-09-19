import React from "react";
function DetalleProducto ({nombre,precio,descripcion}) {
    return (
        <div>
            <h2> Nombre del producto: {nombre}</h2>
            <p>Precio del producto: {precio} </p>
            <p>Descripcion del producto: {descripcion}</p>
        </div>
    );
}
export default DetalleProducto;