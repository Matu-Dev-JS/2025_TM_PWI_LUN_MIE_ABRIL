function saludar(event) {
    //El objeto event nos trae informacion sobre el evento
    console.log(event.target)
    alert('hola')
}

//Eventos
const boton_1_HTML = document.getElementById('boton-1')
const boton_3_HTML = document.getElementById('boton-3')



//Aca estoy referenciando a la funcion saludar (NO se ejecuta)
boton_1_HTML.onclick = saludar


//addEventListener es la forma mas correcta y estandar para trabajar con eventos
//addEventListener es un metodo accesible por cualquier elemento del dom
//Recibe 2 parametros: 
//- type: String del tipo de evento ('click', 'dbclick')
//- callback/accion: Funcion que se va a ejecutar cuando ocurra el evento
//Aca estoy referenciando a la funcion saludar (NO se ejecuta)
boton_3_HTML.addEventListener('click', saludar)


//Todas las funciones asociadas a un evento reciben el objeto event
//El objeto event nos da informacion sobre el evento emitido
function handleSubmitForm ( event ){
    //Por defecto el evento submit recarga la pagina
    //Queremos prevenir el comportamiento por defecto del evento submit
    event.preventDefault()

    //event.target guarda al elemento del cual se ejecuto el evento
    console.log(event.target)
    
    let nombre = event.target.nombre.value
    console.log(nombre)
    console.log('Se envio un formulario')
}

const formulario_HTML = document.getElementById('formulario')

formulario_HTML.addEventListener('submit', handleSubmitForm)


const parrafo_HTML = document.getElementById('parrafo')

parrafo_HTML.addEventListener('copy', function(event){
    //Por defecto el evento copiar copia algo en el clipboard
    event.preventDefault()
    alert('Que haces copiando esto??🧐')
})