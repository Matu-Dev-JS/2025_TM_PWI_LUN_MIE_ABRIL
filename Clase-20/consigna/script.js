const button_decrease_HTML = document.getElementById('decrementar') //button
const button_increase_HTML = document.getElementById('incrementar') //button
const counter_HTML = document.getElementById('contador') //Span

let counter_value = 0 //Guarda cuanto vale mi contador

function renderCounter (){
    /* Esta funcion solo tiene la responsabilidad de imprimir el valor de mi variable global counter_value en el span de contador */
    counter_HTML.innerText = counter_value
}

//Para imprimir el 0 de mi contador
renderCounter()

//Cuando demos click al boton de incrementar debera incrementar mi contador en 1
//Cuando demos click al boton de decrementar debera decrementar mi contador en 1