let nombre = 'pepe'
let nombre_2 = nombre

nombre = 'juan'
console.log("Nombre 1: " + nombre)
console.log("Nombre 2: " + nombre_2)
let objeto_1 = {
    nombre: 'pepe'
  }

//Clono mi objeto_1 y guardo el valor en objeto 2
//Spread operator (...)
let objeto_2 = {...objeto_1}

objeto_2.nombre = 'juan'

console.log("Objeto 1: ", objeto_1)
console.log("Objeto 2: ", objeto_2)

let array_state = []
let array_cloned = [...array_state]

array_cloned.push('hola')

console.log('State', array_state)
console.log('Cloned', array_cloned)