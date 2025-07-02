//Quiero transformar mi array de productos en un array de strings donde cada string sera el titulo del producto
  //resultado esperado: ['cuchara metalica', 'cuchara plastica', 'cuchara de plata']

  //Map es un metodo avanzado de arrays, quiere decir que recibira una callback (SIEMPRE HAY QUE PASAR ESTA CALLBACK)
  //Para que sirve? sirve para transformar un array en otro
  //Por ende map retorna SIEMPRE un array y la cantidad de elementos igual a la del array original
  //map por detras recorrera el array y por cada elemento ejecutara la callback y le pasara el elemento recorrido
  //el array resultante sera un array donde cada elemento sera el retorno de la callback

const resultado = productos.map(
  (producto) => {
    console.log('hola ' + producto.nombre)
    return producto.nombre
  }
)
console.log(resultado)