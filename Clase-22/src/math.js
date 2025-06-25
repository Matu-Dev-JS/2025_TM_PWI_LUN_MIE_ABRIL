
//Al poner export antes de la declaracion de la funcion estoy haciendo que sea importable desde otros modulos
export function sumar (a, b) {
    return a + b
}

export function restar (a, b) {
    return a - b
}

export const PI = 3.14

function multiplicar (a, b){
    return a * b
}

function dividir (a, b){
    return a / b
}

export {multiplicar, dividir}

/* Por default solo se puede exportar una cosa */
export default PI
