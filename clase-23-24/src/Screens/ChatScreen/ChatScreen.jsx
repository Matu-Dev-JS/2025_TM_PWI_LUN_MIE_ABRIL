import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'

const messages_servidor = [
	{
		emisor: 'YO',
		hora: '23:10',
		id: 1,
		texto: 'Hola',
		status: 'visto'
	},
	{
		emisor: 'OTRO',
		hora: '23:11',
		id: 2,
		texto: 'Hola que tal?',
		status: 'visto'
	},
	{
		emisor: 'YO',
		hora: '23:12',
		id: 3,
		texto: 'Todo esta bien?',
		status: 'visto'
	}
]

const ChatScreen = () => {
	/* 
	useState: Crea estados
	parametro de useState: El valor de mi estado inicial
	messages: Variable que guarda el valor de mi estado
	setMessages: Funcion para actualizar el estado de mensajes

	REGLAS: 
	- Son inmutables, no podemos cambiarlos de valor ESTO NO SE PUEDE: messages.push('hola'), messages.splice(1, 1) (push, shift, unshift, pop y splice SON MUTABLES)
	*/
    const [messages, setMessages] = useState(messages_servidor)

	const deleteMessageById = (message_id) => {
		/* Logica para actualizar el estado de mensajes eliminando el mensaje con el id recibido */
		const new_message_list = []

		/* Recorrer la lista de mensajes (estado) y agregar a los mensajes que sean de id distinto al id recibido */
		//Pueden usar .filter() (INVESTIGAR)
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}
	
    return (
        <div>
			<button onClick={() => deleteMessageById(1)}>Eliminar primer mensaje</button>
            <h1>Mensajes:</h1>
			<MessagesList messages={messages}/>
        </div>
    )
}

export default ChatScreen