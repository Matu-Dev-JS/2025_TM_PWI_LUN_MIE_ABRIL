import React from 'react'
const Message = ({emisor, hora, id, texto, status}) => {
	return (
		<div>
			<p>{texto}</p>
			<span>{hora}</span>
		</div>
	)
}
export default Message