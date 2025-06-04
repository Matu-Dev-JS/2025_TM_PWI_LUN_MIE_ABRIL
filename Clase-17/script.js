//Array de usuarios
//Usuario: Objeto, name, email, password, id
//Hago un contrato donde aseguro que un usuario en mi aplicacion es un objeto con ciertas propiedades (name, email, password, id)
let users = [
    {
        'id': 1,
        'name': 'Pepe',
        'email': "pepe@gmail.com",
        'password': 'Pepe_123'
    },
    {
        'id': 2,
        'name': 'Maria',
        'email': "maria@gmail.com",
        'password': 'maria_123'
    },
    {
        'id': 3,
        'name': 'Juan',
        'email': "juan@gmail.com",
        'password': 'juan_123'
    }
]

let usuario_1 = users.find(
    function(producto){ 
        return producto.id === 1
    }
)
console.log(usuario_1)


//Array de productos (Hagan 5)
//Cada producto debe tener: price, id, title, stock


const productos = [
    {
        "id": 1,
        "price": 20000,
        "title": "Mayonesa casera",
        "stock": 15
    },
    {
        "id": 23456,
        "price": 10000,
        "title": "Botella se salsa",
        "stock": 2
    },
    {
        "id": 2456,
        "price": 15000,
        "title": "chinchulines",
        "stock": 5
    },
    {
        "id": 2345,
        "price": 2000,
        "title": "botella de agua vida",
        "stock": 15
    },
    {
        "id": 5000,
        "price": 3000,
        "title": "Coca cola 1,5",
        "stock": 9
    },
]
//Para arrays de objetos el includes, indexOf NO SIRVEN

//Hagan una funcion que se llame buscarProductoPorId
//buscarProductoPorId(id) y va a retornar el producto buscado
/* 
Como podria resolver esto?
Recorrer el array (FOR, FOR OF) y evaluar por cada producto si el id de ese producto es igual al id recibido por parametro y en caso de ser iguales deberia devolver ese producto
*/

function buscarProductoPorId (id){
    for(let producto of productos){
        if (producto.id === id){
            return producto
        }
    }
}

console.log(buscarProductoPorId(10))


function buscarPorTitulo(title){
    for(let producto of productos){
        if(producto.title===title){
            return producto
        }
    }
}

console.log(buscarPorTitulo('chinchulines'))


function buscarProductoPorPrecioYTitulo(price,title){
    for( let producto of productos){
        if(producto.price === price && producto.title === title){
            return producto
        }
    }
}

//Crear la funcion llamada buscarPorTitulo(title)


//Crear una funcion que se llame buscarProductoPorPrecioYTitulo
//buscarProductoPorPrecioYTitulo(precio, titulo)
//producto.title === title && 


//En todas las funciones que hicimos el unico bloque que cambia es la condicion, dicha condicion naturalmente siempre sera disntinta
//Me gustaria tener una funcion llamada buscarProducto va a recibir 1 parametro llamado condicion, dicho sera una FUNCION

function productoTieneTituloChinchulines (producto){
    return producto.title === 'chinchulines'
}
function productoTienePrecioMil (producto){
    return producto.price === 1000
}

/* console.log(productoTieneTituloChinchulines(productos[0]))
console.log(productoTieneTituloChinchulines(productos[1]))
console.log(productoTieneTituloChinchulines(productos[2]))
console.log(productoTieneTituloChinchulines(productos[3]))
console.log(productoTieneTituloChinchulines(productos[4]))

console.log(productoTienePrecioMil(productos[0]))
console.log(productoTienePrecioMil(productos[1]))
console.log(productoTienePrecioMil(productos[2]))
console.log(productoTienePrecioMil(productos[3]))
console.log(productoTienePrecioMil(productos[4])) */

//Le decimos callback a las funciones recibidas por parametros
//Porque? porque son llamadas por detras

//el tipo de dato de condicionCallback es function
function buscarProducto (condicionCallback){
    for(let producto of productos){
        //Confio en que la funcion condicionCallback me devolvera un boolean
        if(condicionCallback(producto)){
            return producto
        }
    }
}



buscarProducto( productoTienePrecioMil )
let producto_buscado = buscarProducto(
    function(producto){
        return producto.price === 2000
    }
)
console.log(producto_buscado)


//Si soy mayor suceda algo

let edad = 14
function siSoyMayorHareAlgo (algoCallback, algoFallback){
    if(edad > 18){
        algoCallback()
    }
    else{
        algoFallback()
    }
}
function hablar ( ){
    alert("Holaaaa")
}

function correr (){
    alert('Estoy corriendo')
}

/* siSoyMayorHareAlgo(correr, hablar) */

//Hacer una funcion que se llame solicitarDatoYMostrar,
// recibira el parametro comoMostrarCallback, que sera una funcion, esa funcion sera la accion que como se mostrara el dato ingresado
// que solicitara un dato por prompt y luego invocara y pasara el dato a la callback comoMostrar

//Confio en que comoMostrarCallback es una funcion y que recibe un string y EN TEORIA deberia mostrar ese dato de alguna manera
function solicitarDatoYMostrar(comoMostrarCallback){
    let dato = prompt('Ingresa un dato')
    comoMostrarCallback(dato)
}

//la funcion que pasamos como parametro es una funcion anonima (NO tiene nombre), se suelen usar cuando una funcion solo se usa una vez, es una caracteristica muy usada en callbacks
/* s */

/* 

NO HAGAN CALLBACKS NO ES NECESARIO ESTO ES PRACTICA DE RECORRER ARRAYS
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

2)
Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

3)
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

5) Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo

*/