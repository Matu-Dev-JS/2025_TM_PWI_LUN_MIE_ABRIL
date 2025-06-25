import React from "react"

import ComponenteTonto from './Components/ComponenteTonto/ComponenteTonto'
import Navbar from "./Components/Navbar/Navbar"



/* Esto si es REACT */
function App () {
  //Quiero que se muestre un mensaje que tengo en una variable en la pagina
  let mesaje = 'hola que tal!'
  let nombre = 'Pepe'
  function alertar () {
    alert("SOYYY UNA ALERTA")
  }
  return (
    <div>
      <h1>{mesaje} {nombre}</h1>
      <button onClick={alertar}>Alertar</button>
      <Navbar/>
      <ComponenteTonto/>
      <ComponenteTonto/>
      <ComponenteTonto/>
      <ComponenteTonto/>
    </div>
  )
}

export default App

