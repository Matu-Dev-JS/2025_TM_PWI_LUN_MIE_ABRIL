//alert('hola')
/* let nombre = prompt('hola, decime tu nombre')
alert(nombre)
console.log(nombre) */
//las variables guardan datos
//alert('pepesito')


//let numero_1 = prompt('decime un numero')
//alert("Este es el numero seleccionado " + numero_1)

//BUCLES
//FOR, WHILE
//FOR: Es un bucle que se usa para repetir acciones una X cantidad de veces
//WHILE: Es un bucle condicional, se repetira la accion MIENTRAS X condicion se cumpla

//Saludame 5 veces
//Necesitamos una forma de repetir acciones
//FOR
//Cuantas veces repetiremos la accion?: 5
//Cual es la accion a repetir: Mandar por consola un 'hola'

/* for(
    let iterador = 1; //Empiezo en la primera repeticion
    iterador <= 5;//LIMITE: Mientras la condicion se cumpla se repetira el bloque de codigo
    iterador = iterador + 1 //Ritmo de actualizacion
)
{
    console.log(iterador)
    console.log('hola')
}

console.log('fin.') */


//Envia 4000 mails
//Repite: 4000
//Se repite: Enviar un mail


//Se realiza la carga de 10 valores enteros por teclado
//FOR
//Cuantas veces se repite: 10
//Que repetimos? la carga de valores enteros (Prompt)

//WHILE

//Re-ingresar un numero mientras sea invalido
//let numero = '10'
//Me debe devolver verdadero si ES UN NUMERO 
//console.log(!isNaN(numero))
/* let numero = prompt('Dame un numero')  */

//Si es '' o null o isNaN 
//FORMA SIMPLIFICADA: !numero || isNaN(numero)
//while(true) learn
/* while( numero === '' || numero === null || isNaN(numero) ){
    
    alert("ERROR: El dato debe ser un numero")
    numero = prompt('Dame un numero')
}
alert("Ya era hora!!")

 */


//Solicitar la contraseña hasta que sea la correcta

/* 
let contraseña_guardada = 'pepe123'
let contraseña_solicitada = prompt('Dame la contraseña')
while(
    !contraseña_solicitada 
    || 
    contraseña_solicitada !== contraseña_guardada
){
    alert("Error: Contraseña no valida")
    contraseña_solicitada = prompt('Dame la contraseña')
}
alert("Contraseña correcta")  */



//Obtener la sumatoria de 3 numeros
//FOR
//ACCION A REPETIR: solicitar y sumar (acumular) el numero
//Cuantas veces? 3

let sumatoria = 0
for(
    let i = 1;
    i <= 3;
    i = i + 1 //i++
){
    let numero = prompt('Dame un numero para sumarlo')
    while(numero === '' || numero === null || isNaN(numero)){
        alert('Error numero no valido')
        numero = prompt("ingresa el numero")
    }
    sumatoria = sumatoria + Number(numero)
}

alert('Resultado: ' + sumatoria)






//ARRAYS

