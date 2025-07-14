import React, { useState } from 'react'
const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

	/* 
	Cuando necesito pasar un parametro a una funcion asociada a un evento, podemos encerrarlo en otra funcion, de esta manera evitamos que se ejecute al rendirzarse el componente
	ejemplo:
	Incorrecto: <button onClick={alert('hola')}></button> => Apenas se cargue el boton se ejecutara la alerta
	Correcto: <button onClick={() => alert('hola')}></button> => La funcion solo se ejecutara al dar click
	*/
	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	return (
		<div onContextMenu={handleChangeMessageSelected}>
			<p>{texto}</p>
			<span>{hora}</span>
			{
				message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
			}
		</div>
	)
}
export default Message