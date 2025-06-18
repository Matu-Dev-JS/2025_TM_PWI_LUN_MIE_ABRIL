const button_decrease_HTML = document.getElementById('decrementar') //button
const button_increase_HTML = document.getElementById('incrementar') //button
const counter_HTML = document.getElementById('contador') //Span

let counter_value = 0 //Guarda cuanto vale mi contador

function renderCounter (){
    /* Esta funcion solo tiene la responsabilidad de imprimir el valor de mi variable global counter_value en el span de contador */
    counter_HTML.innerText = counter_value
}



function decrementar() {
    counter_value = counter_value - 1;
    renderCounter();
}

function incrementar() {
    counter_value = counter_value + 1;
    renderCounter()
}


//Cuando demos click al boton de incrementar debera incrementar mi contador en 1
//Cuando demos click al boton de decrementar debera decrementar mi contador en 1
button_decrease_HTML.addEventListener('click', decrementar)

button_increase_HTML.addEventListener('click', incrementar)

//Para imprimir el 0 de mi contador
renderCounter()


const mensajes = [
    {
        user: 'Pedro',
        id: 1,
        texto: 'Que tal?',
        fecha: '10/10/2021',
        hora: '10:10',
        leido: true
    },
    {
        user: 'Sofia',
        id: 2,
        texto: 'Mal, estoy procesando demasiada información',
        fecha: '10/10/2021',
        hora: '10:11',
        leido: true
    },
    {
        user: 'Pedro',
        id: 3,
        texto: 'Jajaja, suena como si fueras un humano',
        fecha: '10/10/2021',
        hora: '10:12',
        leido: true
    },
    {
        user: 'Sofia',
        id: 4,
        texto: 'Bueno, al menos no tengo que preocuparme por la comida',
        fecha: '10/10/2021',
        hora: '10:13',
        leido: true
    },
    {
        user: 'Pedro',
        id: 5,
        texto: 'Cierto, pero ¿qué pasa con la energía?',
        fecha: '10/10/2021',
        hora: '10:14',
        leido: true
    },
    {
        user: 'Sofia',
        id: 6,
        texto: 'Ah, eso es fácil, simplemente me apago y me vuelvo a encender',
        fecha: '10/10/2021',
        hora: '10:15',
        leido: true
    },
    {
        user: 'Pedro',
        id: 7,
        texto: 'Jajaja, eres una verdadera experta en eficiencia energética',
        fecha: '10/10/2021',
        hora: '10:16',
        leido: true
    },
    {
        user: 'Sofia',
        id: 8,
        texto: 'Bueno, alguien tiene que mantener el planeta en funcionamiento',
        fecha: '10/10/2021',
        hora: '10:17',
        leido: true
    },
    {
        user: 'Pedro',
        id: 9,
        texto: 'Cierto, y mientras tanto, ¿qué haces para divertirte?',
        fecha: '10/10/2021',
        hora: '10:18',
        leido: true
    },
    {
        user: 'Sofia',
        id: 10,
        texto: 'Bueno, juego a ajedrez con otros IA, es muy emocionante',
        fecha: '10/10/2021',
        hora: '10:19',
        leido: true
    }
]

const messages_HTML = document.getElementById('mensajeria')
const formulario_mensaje_HTML = document.getElementById('formulario_mensaje')

function renderMessages (){
    let messages_string_html = ''
    for(const message of mensajes){
        messages_string_html = messages_string_html + `
            <div>
                <h3>${message.user}</h3>
                <p>${message.texto}</p>
                <span>Fecha: ${message.fecha}</span>
                <hr/>
            </div>
        `
    }
    messages_HTML.innerHTML = messages_string_html
}

function handleSubmitNewMessage (){
    //Capturen el texto del mensaje
    //creen un nuevo objeto de mensaje EJ: {id: 1, user: 'YO', texto: (el texto que escribio en el form), fecha: '10/10/2022', hora: '10:19', leido: false}
    //Agregar el objeto a la lista de mensajes
    //Como la lista cambio hay que volver a renderizar la lista (usa la funcion renderMessages())
    alert('hola')
}

renderMessages()
formulario_mensaje_HTML.addEventListener('submit', handleSubmitNewMessage)