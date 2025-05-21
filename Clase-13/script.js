//Verdadero o falso: truthy y falsy
//Todo dato puede ser trasnformado a boolean
//Como se transforma? Boolean(dato)
//Si un dato al ser transformado da false decimos que ese dato es falsy
//0, NaN, null, undefined, '', false

//Si un dato al ser transformado da true decimos que ese dato es truthy
/*
Boolean('hola') truthy
Boolean('pepe') truthy
Boolean(60) truthy
Boolean(-60) truthy
Boolean(0) falsy
Boolean(NaN) falsy
 */


//Comparadores
//Sirven para comparar datos
//Devuelven siempre boolean
/* 

==: Es igual a 
===: Es estrictamente igual a
!=: Es distinto de
!==: Es estrictamente distinto de

//SOLO PARA NUMEROS (Por el momento)
>: Mayor a
<: Menor a
>=: Mayor o igual
<=: Menor o igual
*/
//JS es case sensitive
//console.log('pepe' == 'Pepe')
/* 
console.log(40 == '40')
console.log(true == '1') 
*/

//Es buena practica comprar igualdad con estricta igualdad
//console.log('1' === 1)

//Excepcion de JS: Ningun dato se puede comparar con NaN nisiquiera NaN
/* 
console.log(0 == NaN)
console.log(NaN === NaN) 
*/
/* 
//Forma casera de saber si un dato es NaN
console.log(String( Number('hola') ) === 'NaN')
//Esto es mejor si queremos saber si un dato es NaN
console.log( isNaN('pepe') ) 
*/
//Excepcion de JS, null es igual a undefined y a null
//console.log(null == undefined)
//console.log('' == 0)

/* 
console.log(1 != '1')
console.log(1 !== '1')
console.log('pepe' != 'pepe')
console.log('maria' != 'pepe')
 */



//Operadores logicos

/* 
!  :  NOT (No logico)
Transforma el valor a booleano y devuelve el valor opuesto
!80
! Boolean(80)
! true
false

!NaN
!Boolean(NaN)
!false
true

!!!90
!!!Boolean(90)
!!!true
!!false
!true
false

//Queremos que si un usuario no escribio nada ('') nos de verdadero
!''
!Boolean('')
!false
true

&& : AND (y logico) Es un selector
Si el primer valor es truthy devolvera el segundo
Si el primer valor es falsy devolvera el primero

90 && 70
null && 0
Boolean(null) && 0
false && 0
false

'hola' && NaN
NaN

'null' && 'undefined'
Boolean('null') && 'undefined'
true && 'undefined'

null && undefinded
null


'hola' && Number(string(null))
Number(string(null))
Number('null')
NaN

6 && 0
0


|| : OR (o logico)
Si el primer valor es truthy devolvera el primero
Si el primer valor es falsy devolvera el segundo

70 || false
70

null || 'juan'
'juan'

900 || 700
900

null || 0 || 80
0 || 80
80


*/



//variables
/* 
Sirven para guardar datos en memoria

VAR
LET 
CONST
*/
/* 
//Declarar que existe una variable llamada edad
//Cuando no le damos valor inicial mi variable vale undefined
var edad 


//Declarando mi variable tipo VAR y inicializando la variable con el string 'pepe'
var nombre = 'pepe'

//Re asignar
edad = 42

console.log(edad)

console.log('Mi nombre es ' + nombre) 
*/

//VAR
//Permite que se declare multiples veces una misma variable
//Permite la re-asignacion (puedo cambiar valores)
//Tiene hoisting 
//Al no tener un valor incial se inicializa en undefined


//Que es el hoisting: https://developer.mozilla.org/es/docs/Glossary/Hoisting

/* 
console.log(edad)
var edad = 0
edad = 42 
*/

//LET (ES6) (Es mejor que var y siempre vamos a usar let)
//NO Permite que se declare multiples veces una misma variable
//Permite la re-asignacion (puedo cambiar valores)
//Al no tener un valor incial se inicializa en undefined
//NO Tiene hoisting 

/* let edad
let nombre = 'pepe'
nombre = 'juan' */

//CONST (Por el momento NO la usen)
//NO Permite que se declare multiples veces una misma variable
//NO Permite la re-asignacion (puedo cambiar valores)
//NO se puede No-inicializar
//NO Tiene hoisting 

/* 
console.log(nombre)
const nombre = 'pepe' 
*/
//Las constantes que guarden datos primitivos se les suele poner mayuscula
/* const PI = 3.14
const MERCADO_LIBRE_URL = 'https://www.mercadolibre.com.ar/' */


//bloques de codigo

/* console.log('hola')
{
    //Dentro de un bloque de codigo
    console.log('hola')
} */

//Ambito y alcance

//Las variables let y const poseen ambito y alcance
//El ambito se define a partir de donde se declara una variable

//GLOBAL
/* let nombre = 'pepe' 

{
    //LOCAL
    //Bloque de codigo
    let edad = 50
    console.log(edad)
    let nombre = 'juan'
    nombre = 'pepe'
    console.log(nombre)
}

{
    //Programa para saludar a mi mejor amigo
    let nombre = 'maximo'
    console.log('El nombre de mi mejor amigo es ' + nombre)
    console.log("Oh no he matado a " + nombre)
}

{
    //Programa para saludarme a mi mismo
    let nombre = 'alana'
    console.log("Yo me llamo " + nombre)
}

console.log(nombre) */

//condicionales
/* 
let nombre = prompt('Cual es tu nombre?') //'Pepe'

//Si sos pepe dejame pasar sino pateame

//Dejar pasar si sos pepe con P mayuscula o p minuscula
if(nombre === 'pepe' || nombre === 'Pepe' ){
    console.log('Bienvenido jefe')
}
else{
    console.log('Patada ninja')
} */

let nombre = prompt('Decime tu nombre') //'maria'
let edad = prompt('Decime tu edad')//50

//Lo saludo si se llama pepe y tiene mas o 50 años

/* 
TABLAS DE LA VERDAD:
AND logico:
true && true = true
true && false = false
false && true = false
false && false = false

OR Logico:
true || true = true
true || false = true
false || true =  true
false || false =  false
*/

if(nombre === 'pepe' && edad >= 50 ){
    console.log('Bienvenido jefe')
}
else{
    console.log('patada ninja')
}


//Si un numero esta entre 0 y 100

let numero = 60
if(numero >= 0 && numero <= 100){

}

//Si numero es menor a 0 o mayor a 100

if(numero <= 0 || numero >= 100){
    
}


//funciones nativas (alert, prompt)