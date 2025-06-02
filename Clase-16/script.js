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
        nombre:'maria',
        fecha_ingreso: '11/10/2020',
        grupo_sanguineo: 'AB'
    },
    {
        nombre:'maria',
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