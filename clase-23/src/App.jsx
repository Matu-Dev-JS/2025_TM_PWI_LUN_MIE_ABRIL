import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'

/* El componente App es el componente principal de la aplicacion */
function App() {
  const secciones = [
    {
      titulo: 'Migracion de sitios',
      img: 'http//url.png',
      text: 'lorem ipsum'
    }
  ]
  //mook de datos

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
    function(producto){
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

export default App
