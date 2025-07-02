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

	
	return (
		<div>
			<button onClick={decrementar}>-</button>
			<span>{contador}</span>
			<button onClick={incrementar}>+</button>
		</div>
	)
}

export default App
