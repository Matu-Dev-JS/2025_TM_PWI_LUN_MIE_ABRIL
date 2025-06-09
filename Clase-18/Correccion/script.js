

/* NO HAGAN CALLBACKS NO ES NECESARIO ESTO ES PRACTICA DE RECORRER ARRAYS
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array. 
*/
//Sinonimos de un array?: Arreglo, lista, coleccion, ...Cualquier cosa que indique una lista de algo
let lista = [1, 2, 3, 4, 5]

//Cual es la responsabilidad de la funcion sumatoria?
//Devolver la sumatoria total de los numeros
//Debe ser agnostica? Se deberia usar en cualquier contexto esta sumatoria
//Obtener la suma de puntos de un usuario para guardarlo en una DB
//Obtener la suma de puntos de un usuario para mostrarlo en pantalla
//Ninguna de las finalidades anteriores se pueden hacer si la funcion se toma responsabilidad del console.log

/* 
function sumatoria(lista_numeros){
    let valor_total = 0
    for (let numero of lista_numeros){ //Para que se usa un FOR OF? Para recorrer arrays
        valor_total = valor_total + numero
    }
    
    return valor_total
}

console.log(sumatoria(lista)) 
*/
/* 2)
Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
 */

let palabras = ['Hola', 'Buenos días', '¿Como estas?']

//palabras que es? Que es un array de strings

//JSDocs

/**
 * Concatena todos los strings en una sola oracion con espacios
 * @param {String[]} palabras - Array de strings
 * @returns {String} - Oracion concatenada
 */
/* function concatenar(palabras){
    let oracion = ''
    for(let palabra of palabras){
        oracion = oracion + palabra 
    }
    return oracion
}

console.log(concatenar(palabras))
 */
/* 3)
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
 */
let arrayNumeros = [1, 5, 12, 46, 8, 3, 35] //[12, 46, 35]

/* 
Contratos:
Que hace? Filtra a los numeros mayores a 10
Que recibe? Recibe una lista de numeros
Que devuelve? Devuelve una nueva lista con los numeros mayores a 10
*/
//Esto es un caso de FILTRO: Voy a recorrer mi array y los elementos que cumplan con X condicion voy a sumarlos a una nueva lista
/* function arrayMayoresA10(numeros) {
    //PASO 1: Como no se cuales son los elementos mayores a 10 creo una lista vacia para guardarlos cuando lo sepa
    let array_nuevo = []

    for (let numero of numeros) {
        if (numero > 10) {
            //Agregar el numero a la lista de resultado
            array_nuevo.push(numero)
        }
    }
    return array_nuevo
}
let mayoresA10 = arrayMayoresA10(arrayNumeros)
console.log(mayoresA10) */

/* 4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
 */
//Que hace el operador de resto o modulo de la division? Hace la division pero devuelve el resto de la misma
//9 / 3 = 3 y sobran 0 asientos
//10 / 3 = 3 y sobro 1 asiento
//11 / 3 = 3 y sobran 2 asientos 

//Como podemos saber si un numero es par?
//Podemos dividir el numero en 2 y si el resultado tiene 0 de resto sabemos que es par
//4 / 2 = 2 | 4 % 2 = 0 (NO sobro ningun asiento)
//5 / 2 = 2.5 | 5 % 2 = 1 (sobro un asiento)
/* let numeros = [10,2,55,95,34,5,9,64,3,90]
function paresDelArray(numeros){
    let suma = 0
    for (let numero of numeros) {
        if((numero % 2) === 0){
            suma = suma + numero
        }
    }
    return suma
}
let suma = paresDelArray(numeros)
alert("La suma de los pares es: " + suma) */

/* 5) Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo
 */

/* function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2
}
console.log(calcularAreaTriangulo(10, 5)) */