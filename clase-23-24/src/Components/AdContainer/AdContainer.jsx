import React from "react"

const AdContainer = ({children}) => {
	return <div className='ad-container'>
		{children}
	</div>
}

/* 
Ejemplo de uso: 

<AdContainer>
    <h2>Jabon de cara</h2>
    <span>Precio: $3000</span>
</AdContainer>
<AdContainer>
    <h3>Veni a estudia en la UTN</h3>
    <a>Inscribete</a>
</AdContainer>
*/

export default AdContainer