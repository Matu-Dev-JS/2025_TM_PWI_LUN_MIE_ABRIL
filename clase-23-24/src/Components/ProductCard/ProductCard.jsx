import React from "react"

/* 
props siempre estara accesible para un componente
props SIEMPRE SERA UN OBJETO
si no hay props (no le pasamos ningun dato al componente) sera un objeto vacio
*/
function ProductCard ({nombre, precio}) {
    

    return (
        <div>
            <h2>{nombre}</h2>
            <span>El precio de mi producto es ${precio - (precio * 0.21)}</span>
        </div>
    )
}

export default ProductCard