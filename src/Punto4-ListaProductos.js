import React from "react";
import Producto from "./Punto2-producto";

const ListaProductos = ({ productos }) => (
    <div>
        {productos.map((producto, index) => ( 
            <Producto
                key={index}
                nombre={producto.Nombre} 
                precio={producto.precio}
            />
        ))}
    </div>
);

const productos = [
    { Nombre: "Celular", precio: "$ 819.900" },
    { Nombre: "Computador Gamer", precio: "$ 4.519.900" },
    { Nombre: "Consola Xbox Series", precio: "$ 2.499.900" },
];

function List() { 
    return (
        <div>
            <h1>Lista de productos</h1>
            <ListaProductos productos={productos} />
        </div>
    );
}


export default List; 
