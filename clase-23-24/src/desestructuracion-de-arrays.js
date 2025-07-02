//Desestructuracion de objetos
const persona = {
    edad: 20,
    nombre: "pepe"
}
const { nombre, edad } = persona

//Desestructuracion de arrays
const informacion_cliente = [
    11222333,
    'pepe suarez',
    'av siempre viva'
]
const [
    dni_cliente,
    nombre_cliente,
    direccion_cliente
] = informacion_cliente
