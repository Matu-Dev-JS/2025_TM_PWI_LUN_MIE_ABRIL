import React from 'react'

const Contador = () => {
    //ESTADOS
	//React nos ofrece una forma de crear estados, que al actualizarlos recarguen el componente
	//para crear estados react nos ofrece la funcion useState()
	//useState recibe el valor inicial del estado como parametro
	//useState retorna un array con 2 valores
	//El primer valor es el valor del estado
	//El segundo valor es una funcion de actualizacion
	//EL SUPERPODER DE EL ESTADO ES QUE AL ACTUALIZARSE RECARGA MI COMPONENTE
	//REGLAS:
	//EL valor del ESTADO ES INMUTABLE, osea la variable de valor del estado JAMAS deberas actualizarla.
	//La funcion de actualizacion deberiamos llamarla como set + nombre_estado

	
	const [contador, setContador] = useState(0)

	const incrementar = () => {
		setContador(contador + 1)
	}

	const decrementar = () => {
		setContador(contador - 1)
	}
	console.log('Me cargue')
    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span>{contador}</span>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Contador