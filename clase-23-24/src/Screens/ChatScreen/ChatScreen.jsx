import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'

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
    const [messages, setMessages] = useState(messages_servidor)

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