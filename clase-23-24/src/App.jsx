import React, {useState} from 'react'
import MessagesList from './Components/MessagesList/MessagesList'
import ColorCardPalette from './Components/CardColorPalette/CardColorPalette'
import ColorCardPaletteList from './Components/ColorCardPaletteList/ColorCardPaletteList'

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

			<ColorCardPaletteList colors={[
				{likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
				{likes: 9, time: '58 minutes', colors: ['#748873', '#D1A980','#E5E0D8', '#F8F8F8']},
				{likes: 9, time: '58 minutes', colors: ['#5EABD6', '#FEFBC7','#FFB4B4', '#E14434']},
			]}/>
		</div>
	)
}




export default App
