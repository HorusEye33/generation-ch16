function miFuncion(a, b) {
    return (a + b);
}

let resultado = miFuncion(3, 6);
console.log("El resultado es: " + resultado);


/* ******************Función Expresion o Anonima**************** */

let suma = function (a, b) { return (a + b); }

let res = suma (2, 3);

console.log("La suma es: " + res);


let resta = function (a, b) { return (a - b); }

let res1 = resta (10, 5);

console.log("La resta es: " + res1);


let multi = function (a, b) { return (a * b); }

let res2 = multi (8, 5);

console.log("La multiplicación es: " + res2);


let div = function (a, b) { return (a / b); }

let res3 = div (100, 5);

console.log("La división es: " + res3);


/* **********************Self Invoking********************* */
/* No es reutilizable y se llama asi misma */
(function (a, b) {
    console.log("El resultado Self Invoking es: " +  (a + b));
})(3, 4);
