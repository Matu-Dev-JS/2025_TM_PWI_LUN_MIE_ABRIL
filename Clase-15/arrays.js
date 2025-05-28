//ARRAYS y Objetos

//ARRAY: array, lista, coleccion, arreglo
//Los arrays nos permiten listar una serie de datos ordenados
//Los datos dentro del array tienen un orden por indice 
//Las indice se cuenta desde 0
//En este caso 'pepe' tiene la indice 0 del array
//             0        1       2
/* 
let nombres = ['pepe', 'juan', 'maria']

//Los arrays pueden listar CUALQUIER tipo de dato
let array_raro = [
    true, 
    0, 
    'hola', //2
    [
        'hola',//0
        'chau' //1
    ]//3
]

//Si quiero obtener un cierto elemento de un array usare el INDICE de dicho elemento
console.log(array_raro)
console.log(array_raro[2])
console.log(array_raro[3][1])


//Los arrays tienen una propiedad interna llamada length (longitud)
//Nos permite contar cuantos elementos hay dentro de una lista
console.log('Hay: ' + array_raro.length + ' elementos')
console.log('Hay: ' + nombres.length + ' nombres')


//los string tienen un comportamiento similar al array ya que son listas de caracteres

let string = 'pepe'
console.log(string[0])
console.log(string.length) 
*/

//Esto es una mala practica si se hace mal
//No sabemos a ciencia cierta que el indice 2 es el indice de 'maria'
//alumnos[20] = 'pedro'


//Metodos de array (SIMPLES)
//let alumnos = ['pepe', 'juan', 'maria']

//.push(): Nos permite agregar un elemento al final de la lista
//alumnos.push('florencia')

//.unshift(): Nos permite agregar un elemento al principio de la lista
//alumnos.unshift('pedro')

//.pop(): Elmina el ultimo elemento de una lista y lo retorna
//let alumno_eliminado = alumnos.pop()
//console.log(alumno_eliminado)

//.shift(): Elimina el primer elemento de una lista y lo retorna
//alumnos.shift()


//.includes(): nos permite saber si cierto elemento esta dentro de una lista

//console.log( alumnos.includes('pedro') )


//.indexOf(): Nos permite saber el indice de cierto elemento, nos retorna el indice del elemento buscado, si no lo encuentra retorna -1

//let indice_de_pepe = alumnos.indexOf('pe')
//console.log(indice_de_pepe)

let alumnos = ['pepe', 'juan', 'maria']

//.splice(): Nos permite agregar elementos a cierta posicion o eliminar elementos de cierta posicion

//let posicion_de_juan = alumnos.indexOf('juan')
//let valores_eliminados = alumnos.splice(posicion_de_juan, 1)
//console.log(valores_eliminados)
//console.log(alumnos)

//Quiero agregar a ulises, pedrito en la posicion de juan

//let posicion_de_juan = alumnos.indexOf('juan')

//alumnos.splice(posicion_de_juan, 0, 'ulises', 'pedrito')

//console.log(alumnos)

let dias_que_hay_clases = ['lunes', 'miercoles']
let dias_semana = [
    'lunes', 
    'martes', 
    'miercoles', 
    'jueves', 
    'viernes', 
    'sabado', 
    'domingo'
]

//Quiero agregar un dia de clases a la semana, pero este no debe estar repetido, en caso de estar repetido decir 'ERROR dia repetido' por consola

//PASOS a tener en cuenta
//Solicitar el dia de la semana al usuario y validar que sea un dia de samana y que no este en la lista de dias que hay clases
//En caso de fallar volvemos a solicitar el dia al usuario
//Si todo esta bien, agregar ese dia a la lista de dias_que_hay_clases


//let dia_a_agregar = prompt("Dame un dia para agregar a los dias de clases")

//si NO es un dia de la semana o ESTA en la lista de dias de clases
//let dia_es_invalido = !dias_semana.includes( dia_a_agregar ) || dias_que_hay_clases.includes(dia_a_agregar)

//Si es un dia de la semana y NO esta en la lista de dias de clase
//let dia_es_valido = dias_semana.includes(dia_a_agregar) && !dias_que_hay_clases.includes(dia_a_agregar)


/* 
let dia_a_agregar = prompt("Dame un dia para agregar a los dias de clases")
while(
    !dias_semana.includes( dia_a_agregar ) 
    || 
    dias_que_hay_clases.includes(dia_a_agregar)
){
    alert("Error dia invalido (debe ser un dia de la semana que no sea un dia que este como dia de clases)")
    dia_a_agregar = prompt("Dame un dia para agregar a los dias de clases")
}

dias_que_hay_clases.push(dia_a_agregar)

console.log("Dias de clase: ", dias_que_hay_clases) 
*/


