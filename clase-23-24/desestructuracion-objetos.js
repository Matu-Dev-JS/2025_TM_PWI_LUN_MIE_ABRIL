//const producto = {nombre: 'cuchara', precio: 2000}
//Esta es una forma de simplificar el objeto
//const nombre = producto.nombre
//const precio = producto.precio
//Desestructuracion de objetos
// const {nombre, precio} = producto

// console.log(
// `
//   el nombre del producto es: ${nombre}
//   el precio del producto es: $${precio}ARS
// `
// )

//Desestructuracion de objetos

//contratos: mostrar detalle recibe un objeto con las propiedades nombre y precio
function mostrarDetalle ({nombre, precio}){

  console.log(
  `
    el nombre del producto es: ${nombre}
    el precio del producto es: $${precio}ARS
  `
  )
}

const producto = {nombre: 'cuchara', precio: 2000}
mostrarDetalle()