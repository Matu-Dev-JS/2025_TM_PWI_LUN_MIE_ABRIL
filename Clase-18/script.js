//DOM = Document Object Model 
//Nos permite manipular el documento HTML que ve el usuario
//NO es un tema escencial en la cursada, ya que todo lo que vamos a ver se reemplazara por REACT


//Cuando se interpreta nuestro codigo de JS se crea una variable global llamada document
//document es un objeto de JS, donde las propiedades describen toda el HTML en si
//En otras palabras, el document es una representacion de nuestro HTML como un objeto con propiedades y metodos (Nos permiten hacer acciones)
//Como son muchas las cosas que se deben guardar, naturalmente document es un objeto GIGANTE
//TODOS los elementos de mi HTML en JS seran objetos
document
console.dir(document)

/* //Estoy buscando un elemento por ID
let h1 = document.getElementById('title')

//En caso de no encontrar el elemento devuelve un NULL
let h2 = document.getElementById('subtitle') */

//QUERY SELECTOR (Nos permite buscar elementos por su selector)
//Buscar un elemento por la clase usando el selector de clases
/* let contenedor = document.querySelector('.container')
 */
//Buscar un elemento por su selector de elemento //Poco recomendable ya que si hay 2 formularios no te sirve para llamar al segundo
/* 
let formulario = document.querySelector('form')
console.dir(formulario)
 */
//Quiero que en mi pagina diga 'hola pepe'
//PASO 1: llamo al elemento a modificar
let h1 = document.getElementById('title')

//PASO 2: Si quiero modificar el texto interno de mi elemento, debo modificar la propiedad innerText 
h1.innerText = 'Hola pepe'

//EJERCICIO:
//Van a solcitar al usuario 2 numeros (prompt)
//Van a mostrar en un span de su HTML el siguiente texto:
//'El resultado de {numero_1} + {numero_2} es igual a {resultado}'


let numero_1 = prompt("Ingrese el primer número:");
while(!numero_1 || isNaN(numero_1)){
    numero_1 = prompt('Dato incorrecto, ingresa nuevamente')
}
let numero_2 = prompt("Ingrese el segundo número:");

let resultado = Number(numero_1) + Number(numero_2);

//Span_HTML es la variable que guarda en que elemento de mi HTML quiero mostrar el resultado
let span_HTML = document.getElementById("texto_resultado")
span_HTML.innerText =`
El resultado de ${numero_1} + ${numero_2} es igual a ${resultado}
`;



//TEMPLATES STRINGS
/* let persona = {
    nombre: 'pepe',
    edad: 50
}
let mensaje = `
    <h1>
        Hola me llamo ${persona.nombre} y tengo ${persona.edad} años
    </h1>
`
console.log(
    mensaje
)

console.log(
    '<h1>Hola me llamo ' + persona.nombre + ' y tengo ' + persona.edad + ' años</h1>'
)

let pais = {
    nombre: 'Argentina',
    hab: 45000000,
    id: 1,
    pbiPerCapita: 7000,

} */

/* 
El pais ${nombre} tiene tantos ${hab} habitantes y un PBI per capita de ${pbiPerCapita}
*/


