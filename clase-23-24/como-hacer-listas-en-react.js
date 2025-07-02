//Ejercicio 283
//Tengo: ['hola', 'que tal?', 'Buenos dias']
//Quiero tener: [<div>hola</div>, <div>que tal?</div>, <div>Buenos dias</div>]
const array_original = ['hola', 'que tal?', 'Buenos dias']
const resultado = []

for(let elemento of array_original){
resultado.push(<div>{elemento}</div>)
}
console.log(resultado)
//Si queres renderizarlo
//...en el componente
return (
    <div>
        {resultado}
    </div>
)