//FUNCIONES
//Guardar un bloque de codigo en memoria
//Una funcion sin valor de retorno retorna un undefined
//Para tener un valor de retorno usamos la palabra resevada return 
//Podemos transmitir informacion a una funcion mediante los paramentros


//Ventajas de usar funciones:
//Principio DRY: Dont repeat yourself
//Separar las responsabilidades de nuestro programa


//Declaro la funcion saludar
/* 
function saludar(){
    console.log("Hola que tal!")
} 
*/


//invocar
//saludar()

//Declaracion
function solicitarTexto (mensaje) {
    let texto = prompt(mensaje)
    while(!texto){
        alert('Error: Texto no valido')
        texto = prompt(mensaje)
    }
    return texto
}

//Invocar
//let retorno_de_solicitar_texto = solicitarTexto()
//console.log(retorno_de_solicitar_texto)
//console.log('Mira este super texto ' + texto)

//Quiero solicitar el nombre y el dia favorito del usuario
//let nombre = solicitarTexto('Dame el nombre')
//let dia = solicitarTexto('Dame el dia')

//sumar que recibira 2 numeros y devolvera el resultado de la suma

function sumar (numero_1, numero_2){
    return numero_1 + numero_2
}

console.log(sumar(1, 2))
console.log(sumar(10, 20))

//Crear una funcion llamada calcularIva que reciba el precio y retorne el IVA de dicho precio

function calcularIva (precio){
    return precio * 0.21
}

console.log(calcularIva(140000))

function calcularPrecioConIva (precio){
  let total = Number(precio)*0.21+Number(precio)
  return total
}
let valor_iva = calcularPrecioConIva(prompt("ingresa un precio: "))
alert('El valor del iva es $'+ valor_iva)