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

	const addNewMessage = (new_message) => {
		/* Agrege el nuevo mensaje al estado */
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

        </div>
    )
}



export default ChatScreen