/* 
1)Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos

Vas a recorrer el array vas checkeando que el elemento actual no sea menor que el anterior, si es menor debes seleccionar ese elemento y seguir con el recorrido

3, 1, 5
3 es el primero asi que vamos al siguiente
1, 3 < 1 (Y si es false) vas a seleccionar el 1
5, 1 < 5 (Como esto es true) vamos a seguir con el 1

//obtenerMenor(5, 7, 99, 34, 54, 2, 12)
//2

2)Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.
NO USAR INCLUDES

//contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
//false

3)Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
//gano(['⭐ '⭐️', '⭐️', '💫', '✨']) 
//false

//gano(['⭐ '⭐️', '⭐️', '⭐️', '⭐️']) 
//true

PD: win + . abre el selector de emojis

4)Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

//multiplicar(2, [5, 7, 15, 22, 40])
//[10, 14, 30, 44, 80]

5)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a la longitud.
En caso de que ninguna coincida devolver un array vacio

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']
*/