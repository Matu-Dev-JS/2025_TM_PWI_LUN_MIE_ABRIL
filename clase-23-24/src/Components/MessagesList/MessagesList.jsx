import React from "react"
import Message from "../Message/Message"

const MessagesList = ({ messages, deleteMessageById }) => {

	//Esto es un ejemplo de renderizado condicional
	//Tarea para investigar, esto se puede hacer con algo llamado operador ternario o con && (AND)
	if( messages.length === 0 ){
		return <span>Aun no tienes mensajes!</span>
	}
	
	const lista_mensajes = messages.map(
		function (message) {
			return <Message 
				key={message.id}
				emisor={message.emisor} 
				hora={message.hora} 
				id={message.id} 
				texto={message.texto} 
				status={message.status}
				deleteMessageById={deleteMessageById}
			/>
		}
	)
	
	return (
		<div>
			{lista_mensajes}
		</div>
	)
}
export default MessagesList