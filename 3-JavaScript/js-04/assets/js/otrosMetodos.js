
//sort() 
//ordenar los elementos de un arreglo de forma alfabetica 

const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort();
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort();
console.log(arr2);

// En este caso toma el primer valor del número y lo ordena
const arr3 = [5, 1231, 567, 1, 80]; 
arr3.sort((a,b) => a - b);//Con esta funcion se ordena númericamente de menor a mayor
console.log(arr3);
arr3.sort((a,b) => b - a);//Con esta funcion se ordena númericamente de mayor a menor
console.log(arr3);

//función declarada
//Hoisting: Es un proceso de reacomodo del codigo
function sumar(a, b) {
    return a + b;
}
/* console.log(sumar(5, 7)); */

let a = 2;
/* console.log(a); */

//funcion expresada
// No funciona el hoisting ya que la funcion esta guardada dentro de una variable

const multiplicar = function (a, b) {
    return a * b;
}

/* console.log(multiplicar(3, 5)); */

//funciones flecha

//Primer manera de hacerse:
/* const dividir = (a, b) => {
    return a / b;
} */
//Segunda manera de hacerse:
const dividir = (a,b) => a / b;

/* console.log(dividir(10, 2)); */


/* ******************************************************** */

//forEach
// Un ciclo que recorre en automatico todo nuestro arreglo

const arrNumeros = [1, 4, 6, 8, 10, 20, 30];

//Con for
/* for (let i = 0; i < arrNumeros.length; i++) {
        arrNumeros[i] = arrNumeros[i] * 2;    
} */
/* console.log(arrNumeros); */

//Con forEach()
//forEach(elemento, indice, arreglo completo)
arrNumeros.forEach((elemento, index, arr) => console.log(elemento,index, arr));

arrNumeros.forEach((elemento) => console.log
(elemento *= 2)//elemento = elemento * 2 
);