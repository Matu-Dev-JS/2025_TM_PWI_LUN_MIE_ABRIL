import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'


const ChatScreen = () => {

	/* 
	Paso 1: Obtener el contact_id de la url
	Paso 2: Buscar el contact por su contact_id
	Paso 3: Cargar el contact.messages al estado de mensajes
	*/
	
	/* Paso 1: */
	/* 
	useParams() es una funcion que retorna un objeto con los parametros de busqueda de ese momento 
	Siempre retorna un objeto y el tipo de dato de valor de cada parametro de busqueda siempre sera un string
	Ejemplo: /contact/:contact_id/messages
	URL ejemplo: /contact/1/messages
	useParams() devolvera {contact_id: '1'}

	*/
	const {contact_id} = useParams()

	/* Paso 2: */
	const contact_selected = getContactById(contact_id)

	/* Paso 3: */
    const [messages, setMessages] = useState(contact_selected.messages)

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {
		
		const new_mesage = {
			emisor: 'YO',
			hora: '11:10', //Investigar acerca de Date.
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		//Clonar la lista de mensajes (Porque: El clon al ser otra variable PERO NO UN ESTADO si lo vamos a poder mutar)
		const cloned_messages_list = [...messages]
		//Este push es valido porque no estamos mutando en estado 'messages' sino mas bien el clon de ese estado
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

	const deleteAllMessages = () => {
		setMessages([])
	}

	
    return (
        <div>
            <h1>Mensajes:</h1>

			{
				messages.length > 0
				&&
				<button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
			}

			<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
			<NewMessageForm addNewMessage={addNewMessage}/>
        </div>
    )
}



export default ChatScreen