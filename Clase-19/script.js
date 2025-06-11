//DOM
//Llamar a un elemento
/* let contenedor_HTML = document.getElementById("contenedor")
let contenedor_HTML_2 = document.querySelector('#contenedor') */

//Modificar el texto interno
//contenedor_HTML.innerText = '<button>Click</button>'

/* let producto = {
    id: 1,
    title: 'Tv samsung 50"',
    price: 20000,
    stock: 2
} */

//Modificar el HTML interno de un elemento
/* contenedor_HTML.innerHTML = `
    <div>
        <h2>${producto.title}</h2>
        <span>Precio: $${producto.price}</span>
        <span>Stock: ${producto.stock} unidades</span>
        <button class="btn-comprar">Comprar</button>
        <hr/>
    </div>
` */
/* 
Ejercicio de DOM
Crear un objeto llamado perfil que tendra:
- Nombre (solicitarlo por prompt)
- email (solicitarlo por pormpt)
- edad (Solicitarlo por pormpt)

Mostrar dentro de un div:
    h3> Nombre de usuario:  {username}
    span> Email:  {email}
    span> Edad: {edad} años
*/

//let boton = contenedor_HTML.querySelector('.btn-comprar')
//Cambiamos la propiedad de CSS por medio de JS (No es algo comun)
//boton.style.backgroundColor = 'red'

//Agregar una clase a un elemento por medio de JS
//boton.classList.add('dark')

//boton.classList.remove('dark')

//Toggle: si existe 'dark' se elimina pero sino se agrega
//boton.classList.toggle('dark')
//boton.classList.toggle('dark')

//console.dir(boton)

//Correccion
/* 
let perfil = {
    nombre: undefined,
    email: undefined,
    edad: undefined
}
perfil.nombre = prompt("nombre?")
perfil.email = prompt("email?")
perfil.edad = prompt("edad?")
let contenedor_HTML = document.getElementById("contenedor")
contenedor_HTML.innerHTML = `
    <div>
        <h3> Nombre de usuario: ${perfil.nombre}</h3>
        <span> Email: ${perfil.email}</span>
        <span> Edad: ${perfil.edad}</span>
    </div>
`
 */

//CONST
//No se puede reasignar una variable constante

//Datos que sabemos que van a variar en el inicio a fin de un programa
//Las constantes que guardan datos PRIMITIVOS (string, number, boolean, null, undefined) se suelen escribir el nombre con mayusculas y _ (UPPER_SNAKE_CASE)
/* const PI = 3.14 
const URL_SERVIDOR = 'http://server.com'
const PORCENTAJE_IVA = 21 */

//Datos que no son primitivos:
//object, arrays,  (En un futuro) ...funciones
/* 
const personaje = {nombre: 'pepe'}

personaje.nombre = 'juan'
personaje.edad = 90

console.log(personaje) */

//Diccionarios (se escriben con mayusculas)
//Imaginemos que vamos a tener 3 roles posibles para mis usuarios
//"admin", "co-admin", "user"
/* const ROLES_DISPONIBLES = {
    ADMIN: 'admin',
    USER: 'user',
    CO_ADMIN: 'co-admin',
    SUPPORT: 'support'
}

const LENGUAJES_DISPONIBLES = {
    ESPANOL: 'ES',
    INGLES: 'EN',
    PORTUGES: 'BR'
}

 */


const products = [
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    },
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    },
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    },
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    },
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    },
    {
        title: 'Tv samsung 50"',
        price: 30000,
        stock: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_778558-MLA82630556218_032025-O.webp',
        description: "Tv muy buena blablabla"
    }
]

products[0].title = 'pedro'


/* Paso 2 */
const contenedor_HTML = document.getElementById('contenedor')

/* Paso 3 */
let lista_productos_string = ''

//Por cada producto voy a crear un plantilla para poder sumarlo a mi string

/* Paso 4 */
for (const product of products) {

    lista_productos_string = lista_productos_string + `
        <div>
            <h3>${product.title}</h3>
            <img src="${product.img}" alt="${product.title}"
            <p>${product.description}</p>
            <span>Precio: $${product.price + 8000}</span>
            <button>Comprar</button>
            <hr/>
        </div>
    `
}

/* Paso 5 */
/* contenedor_HTML.innerHTML = lista_productos_string */
console.log(lista_productos_string)

const mensajes = [
    {
        user: 'Pedro',
        id: 1,
        texto: 'Que tal?',
        fecha: '10/10/2021',
        hora: '10:10',
        leido: true
    },
    {
        user: 'Sofia',
        id: 2,
        texto: 'Mal, estoy procesando demasiada información',
        fecha: '10/10/2021',
        hora: '10:11',
        leido: true
    },
    {
        user: 'Pedro',
        id: 3,
        texto: 'Jajaja, suena como si fueras un humano',
        fecha: '10/10/2021',
        hora: '10:12',
        leido: true
    },
    {
        user: 'Sofia',
        id: 4,
        texto: 'Bueno, al menos no tengo que preocuparme por la comida',
        fecha: '10/10/2021',
        hora: '10:13',
        leido: true
    },
    {
        user: 'Pedro',
        id: 5,
        texto: 'Cierto, pero ¿qué pasa con la energía?',
        fecha: '10/10/2021',
        hora: '10:14',
        leido: true
    },
    {
        user: 'Sofia',
        id: 6,
        texto: 'Ah, eso es fácil, simplemente me apago y me vuelvo a encender',
        fecha: '10/10/2021',
        hora: '10:15',
        leido: true
    },
    {
        user: 'Pedro',
        id: 7,
        texto: 'Jajaja, eres una verdadera experta en eficiencia energética',
        fecha: '10/10/2021',
        hora: '10:16',
        leido: true
    },
    {
        user: 'Sofia',
        id: 8,
        texto: 'Bueno, alguien tiene que mantener el planeta en funcionamiento',
        fecha: '10/10/2021',
        hora: '10:17',
        leido: true
    },
    {
        user: 'Pedro',
        id: 9,
        texto: 'Cierto, y mientras tanto, ¿qué haces para divertirte?',
        fecha: '10/10/2021',
        hora: '10:18',
        leido: true
    },
    {
        user: 'Sofia',
        id: 10,
        texto: 'Bueno, juego a ajedrez con otros IA, es muy emocionante',
        fecha: '10/10/2021',
        hora: '10:19',
        leido: true
    }
]

let lista_mensajes_string = ''
for (const mensaje of mensajes) {
    lista_mensajes_string = lista_mensajes_string + `
    <div>
        <h3>${mensaje.user}</h3>
        <p>${mensaje.texto}</p>
        <span>Hora y fecha de envio: [${mensaje.hora}${mensaje.fecha}]</span>
        <hr/>
    </div>
    `
}

contenedor_HTML.innerHTML = lista_mensajes_string

/* Por cada mensaje crear la siguiente plantilla 

div> 
    h3> {user}
    p> {text}
    span> Hora y Fecha: [{hora} {fecha}]
    <hr/>
*/

/* 
Paso 1: Tenes que tener algun contenedor donde vas a cargar la lista de mensajes (En el HTML)
Paso 2: Llamar al contenedor en JS
Paso 3: Crear una variable donde vamos a guardar las plantillas
Paso 4: Recorrer el array de mensajes y por cada mensaje crear una plantilla, esa plantilla debe ir guardandose dentro de la variable de plantillas
Paso 5: Asignar al HTML interno del contenedor la variable contenedora de plantillas
*/

/*     
const palabras = ['hola', 'chau', 'juan']

let mensaje = ''
for(let palabra of palabras){
    mensaje = mensaje + palabra
}
console.log(mensaje) */