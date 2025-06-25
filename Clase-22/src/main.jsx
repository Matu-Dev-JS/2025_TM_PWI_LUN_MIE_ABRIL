/* 
Cualquier archivo de .jsx debe importar a React, de no ser asi, puede fallar
*/
import React from 'react'


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PI, { sumar, dividir } from './math.js'

/* import, from, export es sintaxis de JS */
/* En JS hay 2 tipos de archivos, commonJS y module, actualmente estamos usando module */

let numero_1 = 10
let numero_2 = 20
console.log(sumar(numero_1, numero_2))


//Es una funcion que permite enlazar mi aplicacion de react con mi index.html
//Muestro mi aplicacion de react dentro del div con id ROOT
let div_root = document.getElementById('root')
createRoot(div_root).render(
  <App />
)
