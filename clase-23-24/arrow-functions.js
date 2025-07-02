//Funciones nombradas ES5-/+
function sumar (a, b) {
    return a + b
}

//Funciones en flecha (HACEN LO MISMO QUE LAS FUNCIONES NOMBRADAS) ES6
const sumar_2 = (a, b) => {
    return a + b
}

//Retorno implicito
const restar = (a, b) => a - b

//Si la funcion recibe solo un parametro, podememos omitir los ()
const pasarMayuscula = texto => texto.toUpperCase()

//Funciones anonimas en flecha
const palabras = ['hola', 'que tal', 'buenos dias']

//Transformar al array de palabras en un array de palabras en mayuscula

const palabras_en_mayuscula = palabras.map( 
    (palabra) => {
        return palabra.toUpperCase()
    }
)

const palabras_en_mayuscula_2 = palabras.map( 
    (palabra) => palabra.toUpperCase()
)


//Reglas:
//Cuando deberia usar la simplificacion / retorno implicito?
//Cuando solo tengamos que retornar algo, es decir si lo unico que hace la funcion es retornar algo
const calcularIva = (precio) => precio * 0.21

const renderProducto = (productos) => {
    for(const producto of productos){
        console.log(producto.nombre)
    }
    return productos.length
}