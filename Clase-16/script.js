//BUCLES de arrays

let nombres = [
    'pepe', 'maria', 'juan', 'pedrito',
    'pepe', 'maria', 'juan', 'pedrito',
    'pepe', 'maria', 'juan', 'pedrito',
    'pepe', 'maria', 'juan', 'pedrito',
    'pepe', 'maria', 'juan', 'pedrito',
]

//Quiero mandar un hola por consola a cada nombre de mi lista
//Principio DRY : Dont repeat yourself
//Esto seria una mala practica
/* 
console.log('hola ' + nombres[0])
console.log('hola ' + nombres[1])
console.log('hola ' + nombres[2]) 
*/

//ACA deberiamos usar un bucle
//Que bucle? FOR
//Conocemos el limite? si, es el nombres.length

//Hacer un bucle FOR que se repita segun tantos elementos haya en el array
/* for(
    let index = 0;
    index < nombres.length;
    index = index + 1
){
    let nombre = nombres[index]
    console.log('hola ' + nombre)
} */



//existeDentroDeNombres(nombre)
//Una funcion que devolvera un booleano si existe x nombre dentro de la lista

/* function existeDentroDeNombres(nombre_buscado){
    for(let i = 0; i < nombres.length; i = i + 1){
        let nombre = nombres[i]
        if(nombre === nombre_buscado){
            return true //El retorno CORTA LA EJECUCION DE LA FUNCION
        }
    }
    return false
}

console.log(existeDentroDeNombres('firulais')) */


//Crear una funcion llamada promediar que recibira una lista de numeros y debera devolver el promedio
//Como se calcula el promedio, primero suma todas las numeros y despues dividilas por la cantidad de numeros

/* let notas = [9, 5, 5]

function promediar (numeros){
    let sumatoria = 0; 

    //Es donde acumula la sumatoria de numeros
    for (
        let i = 0; //I es el indice que estamos recorriendo
        i < numeros.length; //El limite: Mientras el indice sea menor a la cantidad de numeros
        i = i + 1 //A medida el bloque se ejecute i sera mayor
    ){
        let numero = numeros[i]
        sumatoria = sumatoria + numero; 
    }
    return sumatoria / numeros.length; //La suma de los numeros dividido la cantidad de numeros de la lista
}

console.log(promediar(notas))
promediar([70, 49, 600, 700, 500]) */

//COMO RECORRER ARRAYS DE FORMA FACIL: FOR OF
//FOR OF SIRVE PARA RECORRER DATOS ITERABLES (array, string)
//ES un bucle for especializado para recorrer arrays
/* let notas = [9, 5, 6]

for(let nota of notas){
    console.log('La nota es: ' + nota)
}

function promediar ( numeros ){
    let sumatoria = 0;
    for(let numero of numeros){
        sumatoria = sumatoria + numero
    }
    return sumatoria / numeros.length
}
 */
//Este es un caso raro donde si o si debes usar for normal
/* function buscarElIndiceEnLaLista (numeroBuscado){
    for(
        let i = 0;
        i < notas.length;
        i = i + 1
    ){
        let nota = notas[i]
        if(nota === numeroBuscado){
            return i
        }
    }
} */


//OBJETOS: Los objetos nos permiten describir mediante propiedades un cierto elemento

let persona = {
    nombre: 'pedro',
    apellido: 'Suarez',
    edad: 40,
    profesion: 'Desarrollador web',
    tieneCasa: false,
    nombres_mascotas: ['firulais', 'pancho'],
    vestimenta: {
        pecho: 'remera roja',
        piernas: 'pantalon azul',
        pies: 'zapatillas nike'
    }
}

//Array de objetos
let pacientes = [
    {
        nombre: 'maria',
        fecha_ingreso: '11/10/2020',
        grupo_sanguineo: 'AB'
    },
    {
        nombre: 'maria',
        fecha_ingreso: '11/10/2020',
        grupo_sanguineo: 'AB'
    },
]

//La forma mas correcta de escribir un objeto es asi:
let persona_2 = {
    "nombre": "pepe",
    edad: 40
}
//Accedo a el nombre mediante notacion de corchetes
console.log(persona_2['nombre'])
console.log(persona_2['edad'])

//Javascript creo una forma mas comoda de acceder a una propiedad
//NOTACION DE PUNTOS (.)
console.log(persona_2.nombre)

persona_2['nombre'] = 'pedro'
console.log(persona_2)

//Del renaper me vino este objeto:
//CASO 1
/* let persona_3 = {
    'Numero DNI': '44333222'
}
console.log(persona_3["Numero DNI"]) */

//CASO 2
/* let nombre_propiedad_dni = 'Numero DNI'
let persona_3 = {
    'Numero DNI': '44333222',

}

console.log(persona_3[nombre_propiedad_dni]) */

//Hacer objetos:
/* 
-pais: (cant_hab, superfice, nombre, nombre_capital, continente, nombres_paises_limitrofes)
-personaje: (nombre, vida, fecha_creacion, armadura: (cabeza, pecho, piernas))
-item: (nombre, nivel, precio, id, habilidades: [(nombre, nivel_necesario)])

 */


/* 
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30  
*/
/*

if(cuenta < 18.5){
}
if(cuenta = 18.5 && cuenta <= 24.9){
}
if(cuenta < 29.9 && cuenta> 25 ){
}
if(cuenta >= 30){
}


function generarbBmi (peso, altura){
    let bmi = peso / ( altura * altura )
    if( cuenta < 18.5 ){
        return "bajo de peso";
    }
    else{
        if(cuenta = 18.5 && cuenta <= 24.9){
            return "normal";
        }
        else{
            if(cuenta < 29.9 && cuenta> 25 ){
                return "sobrepeso";
            }
            else{
                if(cuenta >= 30){
                    return "obeso"
                }
            } 
        } 
    } 
}
    */




/* 
function bmi(peso, altura) {
    let cuenta = peso / (altura, 2);
    if (cuenta < 18.5) {
        return "bajo de peso";
    } else if (cuenta >= 18.5 && cuenta <= 24.9) {
        return "normal";
    } else if (cuenta > 24.9 && cuenta <= 29.9) {
        return "sobrepeso";
    } else if (cuenta >= 30) {            
        return "obeso";
    }  
}

*/

//Dia es un numero del 1 al 7, donde 1 es lunes y 7 es domingo
/* let numero_dia = 1
let dia = null */
//seleccionar 'lunes' || 'martes' || 'miercoles'...


//IF ELSE HELL

/* if (numero_dia === 1) {
    dia = 'lunes'
}
else {
    if (numero_dia === 2) {
        dia = 'martes'
    }
    else {
        if (numero_dia === 3) {
            dia = 'miercoles'
        }
        else {
            if (numero_dia === 4) {
                dia = 'jueves'
            }
            else {
                if (numero_dia === 5) {
                    dia = 'viernes'
                }
                else {
                    if (numero_dia === 6) {
                        dia = 'sabado'
                    }
                    else {
                        if (numero_dia === 7) {
                            dia = 'domingo'
                        }
                    }
                }
            }
        }
    }
} */

//Para evitar el IF ELSE HELL se creo ELSE IF

/* if (numero_dia === 1) {
    dia = 'lunes'
}
else if (numero_dia === 2) {
    dia = 'martes'
}
else if (numero_dia === 3) {
    dia = 'miercoles'
}
else if (numero_dia === 4) {
    dia = 'jueves'
}
else if (numero_dia === 5) {
    dia = 'viernes'
}
else if (numero_dia === 6) {
    dia = 'sabado'
}
else if (numero_dia === 7) {
    dia = 'domingo'
}
else{
    dia = 'invalid'
} */



/* switch(numero_dia){
    case 1: 
        dia = 'lunes'
        break
    case 2:
        dia = 'martes' 
        break
    case 3: 
        dia = 'miercoles'
        break
    default:
        dia = 'invalid'
} */



/* let persona_2 = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 30
} */

/* let numero_dia = 1

let dias_disponibles = {
    '1': 'lunes',
    '2': 'martes',
    '3': 'miercoles',
    '4': 'jueves',
    '5': 'viernes',
    '6': 'sabado',
    '7': 'domingo',
    x: 'hola'
}

let dia = dias_disponibles[numero_dia]

console.log('El dia de hoy es ' + dia) */

let numero_dia = 3

let dias_disponibles = [
    'lunes',//0
    'martes',
    'miercoles',
    'jueves', //3
    'viernes',
    'sabado',
    'domingo'
]

console.log( dias_disponibles )

let mañana = dias_disponibles[numero_dia]
let dia = dias_disponibles[numero_dia - 1]
let ayer = dias_disponibles[numero_dia - 2]

console.log('El dia de ayer es ' + ayer)
console.log('El dia de hoy es ' + dia)
console.log('El dia de mañana es ' + mañana )