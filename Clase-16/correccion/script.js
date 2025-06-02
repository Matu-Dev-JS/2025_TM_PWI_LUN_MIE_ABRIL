
/* 1-Crea una función llamada restar(a,b) y nos devuelva la resta de a y b */
function restar(a, b) {
    return a - b;
}

//2 Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
function contarHasta(numero) {
    for (
        let i = 0; //Si ponian 1 esta bien tambien!! 
        i <= numero; 
        i = i + 1
    ) {
        console.log(`Vuelta numero: ${i}`);
    }
}

//3. Hacer una función que reciba tres enteros y retorne el promedio.
function promediarEntreTres(num1, num2, num3){
    return (num1 + num2 + num3) / 3
}
console.log(promediarEntreTres(10, 10, 10))

//4. Hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡

function agregarSignos(palabra) {
    return '¡' + palabra + '!' // Esto seria concatenacion? SI
}
console.log(agregarSignos('Hola'))


/* 5- Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores  */

function obtenerNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
console.log(obtenerNombreCompleto("Alana", "Gorski"))

// 6. Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
// EJEMPLO: Datos con los cuales deben ser enviados a la función
// puedeVerPelicula(12, false) false puedeVerPelicula(12, true) true puedeVerPelicula(16, false) true puedeVerPelicula(18, true) true

//CONDICION: edad >= 15 || tieneAutorizacion
//Version correcta
function puedeVerPelicula(edad, tieneAutorizacion) {
    return edad >= 15 || tieneAutorizacion
}



//ESTO ES UNA MALA PRACTICA
/* function puedeVerPelicula(edad, tieneAutorizacion) {
    if(edad >= 15 || tieneAutorizacion){
        return true
    }
    else {
        return false
    }
} */

/* 
let puedeVer = Number(prompt("Ingrese su edad"));
puedeVerPelicula(puedeVer, Boolean); */

/* 
7. Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
Ingresá una cantidad de grados Celsius
Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}
 */

function gradosCelsiusAFahrenheit(grados) {
    return (grados * 1.8) + 32;
}

let grados = prompt("Ingresar grados Celsius");
let resultado = gradosCelsiusAFahrenheit(grados);
console.log('La conversión de ' + grados + ' grados Celsius a Fahrenheit es: ' + resultado);

//---------------------------------------------------------------------------------------

/* 
8. Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs
*/


let velocidad_bicicleta = 10;
let velocidad_pie = 5;
let velocidad_auto = 50;

function tiempoEnBicicleta(distancia) {
    return distancia / velocidad_bicicleta;
}

function tiempoEnPie(distancia) {
    return distancia / velocidad_pie;
}

function tiempoEnAuto(distancia) {
    return distancia / velocidad_auto;
}


let distancia = prompt("Ingresar distancia del recorrido");
let resultadoEnBicicleta = tiempoEnBicicleta(distancia);
let resultadoAPie = tiempoEnPie(distancia);
let resultadoEnAuto = tiempoEnAuto(distancia);

console.log('Para la distancia ' + distancia + ' km en bicicleta el tiempo de viaje es ' + resultadoEnBicicleta + ' hora/s, a pie ' + resultadoAPie + ' hora/s y en auto ' + resultadoEnAuto + ' hora/s');

//---------------------------------------------------------------------------------------
