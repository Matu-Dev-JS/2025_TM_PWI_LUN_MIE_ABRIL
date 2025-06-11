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


const products  =  [
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



const contenedor_HTML = document.getElementById('contenedor')

let lista_productos_string = ''

//Por cada producto voy a crear un plantilla para poder sumarlo a mi string

for(const product of products){

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
contenedor_HTML.innerHTML = lista_productos_string
    console.log(lista_productos_string)

/*     
const palabras = ['hola', 'chau', 'juan']

let mensaje = ''
for(let palabra of palabras){
    mensaje = mensaje + palabra
}
console.log(mensaje) */