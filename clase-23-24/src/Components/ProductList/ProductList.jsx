import ProductCard from "../ProductCard/ProductCard"


const ProductList = () => {
    const productos = [
        {
            nombre: 'cuchara metalica',
            precio: 1000,
            id: 1
        },
        {
            nombre: 'cuchara plastica',
            precio: 500,
            id: 2
        },
        {
            nombre: 'cuchara de plata',
            precio: 6000,
            id: 3
        }
    ]
    const lista_productos = productos.map(
        function (producto) {
            return (
                <ProductCard
                    nombre={producto.nombre}
                    precio={producto.precio}
                />
            )
        }
    )
    return (
        <div>
            {lista_productos}
        </div>
    )
}