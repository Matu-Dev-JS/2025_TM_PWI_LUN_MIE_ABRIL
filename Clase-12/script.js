/* Multilinea: Alt + Shift + A*/
//Unilinea: Control + K + C

//TIPOS DE DATO Primitivos

//String (cadena de caracteres)
/* 
"hola"
'1'
'que tal?'

//Numero
5
5.1
-10
-10.5
NaN

//Boolean
true
false

//null
//Exepciones: 
// -Se puede transformar a 0 numerico
null

//undefined
undefined 
*/

//Tengo un cartero que envia una carta

//La empresa luego de 2 dias llama al cartero y le pregunta por donde anda y el cartero dice que aun no llego undefined
//LLega el cartero y no lo reciben FALSE
//Llega el cartero y reciben TRUE
//La empresa luego de 2 dias llama al cartero y le pregunta por donde anda y el cartero no responde porque murio Null

//Contructores de datos: Nos permiten transformar datos 

/* Number()
String()
Boolean() */

//console.log : registro por consola
/* console.log('hola mundo')
console.log( String( 8 ) ) //Transforma al 8 numerico a 8 string
console.log( 8 )

//typeof() Nos devuelve el tipo de dato

console.log( typeof( true ) )

console.log( typeof( String( 8 ) ) ) //Transforma al 8 numerico a 8 string
console.log( typeof( 8 ) ) */

//Cuando transformamos a numero a un dato no trasformable a numero nos da un NaN (Not a Number)
//Los strings numericos son strings que se pueden trasnformar a numero sin dar NaN
//'' es un string numerico porque nos da 0 al transformarse a numero
//console.log( Number('') )
//console.log( Number('8') )


//Operadores aritmeticos

/* 
NO SE PUEDEN OPERAR DATOS DE DISTINTO TIPO
JS siempre da un resultado a una operacion

+ Concatenacion: Ocurre cuando almenos uno de los dos datos es string
Transforma los datos no string a string y luego los unifica
Siempre devuelve un string


NaN siempre que sea operado con (suma, resta multiplicacion, division) da NaN

+ Suma: Ocurre cuando NO hay string
Transformar los datos no numericos a number
SIEMPRE devuelve un numero


- Resta
Transformar los datos no numericos a number
SIEMPRE devuelve un numero

/ Division
Transformar los datos no numericos a number
SIEMPRE devuelve un numero

* Multiplicacion
Transformar los datos no numericos a number
SIEMPRE devuelve un numero
*/

/* console.log('hola' + 'chau')
console.log('hola ' + 1)
//'hola' + String(1)
//'hola ' + '1'
//'hola 1'

console.log('11' + 20)
//'11' + String(20)
//'11' + '20'
//'1120'

console.log(0 + 'true')
//String(0) + 'true'
//'0' + 'true'
//'0true'

console.log(true + String(20))
//true + '20'
//String(true) + '20'
//'true' + '20'
//'true20'
 */

/* console.log(true + false)
//Number(true) + Number(false)
//1 + 0
//1

console.log(NaN + 0)

console.log(NaN + '1')
 */

console.log(8 - 'hola')
//8 - Number('hola')
//8 - NaN
//NaN

console.log(null - (Number(true) + ''))
//null - (1 + '')
//null - '1'
//Number(null) - Number('1')
//0 - 1
//-1

console.log(NaN - true * 20 + 'Pepe')
//NaN - Number(true) * 20 + 'pepe'
//NaN - 1 * 20 + 'pepe'
//NaN - 20 + 'pepe'
//NaN + 'pepe'
//String(NaN) + 'pepe'
//'NaN' + 'pepe'
//"NaNpepe"