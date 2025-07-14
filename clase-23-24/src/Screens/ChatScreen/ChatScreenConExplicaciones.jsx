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

const ChatScreenConExplicaciones = () => {
	/* 
	useState: Crea estados
	parametro de useState: El valor de mi estado inicial
	messages: Variable que guarda el valor de mi estado
	setMessages: Funcion para actualizar el estado de mensajes

	REGLAS: 
	- Son inmutables, no podemos cambiarlos de valor ESTO NO SE PUEDE: messages.push('hola'), messages.splice(1, 1) (push, shift, unshift, pop y splice SON MUTABLES)
	*/

	/* 
	- Crear un estado
	- Donde creen su estado, creen todas las funciones para actualizar ese estado
	- Llaman a las funciones donde las necesiten
	*/


    const [messages, setMessages] = useState(messages_servidor)

	const deleteMessageById = (message_id) => {
		/* Logica para actualizar el estado de mensajes eliminando el mensaje con el id recibido */
		/* Creamos un array vacio para guardar todos los mensajes que queremos que se queden */
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


    const deleteMessageByIdWithFilter = (message_id) => {
		//Filter
		/* 
		Es un metodo avanzado de arrays que permite filtrar un array (NO ES MUTABLE)
		Filtrar es eligir ciertos elementos de un array bajo una X condicion
		Devuelve un array nuevo con los elementos que hayan cumplido la condicion, si ningun elemento la cumple sera un [] vacio.
		Filter recibe una callback
		Filter recorrera todos los elementos del array y ejecutara la callback, si la callback devuelve truthy se seleccionara el elemento y se agregara al array nuevo y si devuelve falsy se ignorara
		*/
		const new_messages_list = messages.filter(
			(message) => {
				return message.id !== message_id
			}
		)
		setMessages(new_messages_list)
		
		
	}

	const addNewMessage = (new_message) => {
		/* Agrege el nuevo mensaje al estado */
	}

	const deleteAllMessages = () => {
		setMessages([])
	}
	
	/* Valores que no se imprimen en pantalla: false, null, undefined, [] */

	let deleteMessageButton = null
	if(messages.length > 0 ){
		deleteMessageButton = <button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
	}

	const DeleteMessageButton = () => {
		if(messages.length === 0){
			return null
		}
		return <button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
	}

    return (
        <div>
			
            <h1>Mensajes:</h1>

			{
				messages.length > 0
				&&
				<button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
			}

			{deleteMessageButton}

			<DeleteMessageButton/>
			<MessagesList messages={messages} deleteMessageById={deleteMessageById} />

        </div>
    )
}



export default ChatScreenConExplicaciones