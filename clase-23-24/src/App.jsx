import React, {useState} from 'react'

const App = () => {

	const messages = [
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
	/* Renderizen una lista de mensajes, cada mensaje sera un componente llamado <Message/> y la lista (el map) debe estar en componente llamado <MessageList/> */

	
	return (
		<div>
			<h1>Mensajes:</h1>
			<MessagesList messages={messages}/>
		</div>
	)
}

const MessagesList = ({messages}) => {
	/* Aca iria el mapeo */
	return (
		<div></div>
	)
}
const Message = ({emisor, hora, id, texto, status}) => {
	return (
		<div>
			{/* Aca deben hacer el mensaje */}
		</div>
	)
}

export default App
