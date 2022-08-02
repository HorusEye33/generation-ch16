function miSuma(a, b) {
    let resultado = a + b;
    console.log("La suma es: " + resultado);
}

miSuma(2,3);

/* ------------------------------------------- */

function miSuma(a, b) {
    console.log("La suma es: " + (a + b));
}

miSuma(4,6);

/* ------------------------------------------- */

function miProducto(a, b) {
    return (a * b);
}

console.log("El producto es: " + miProducto(4, 5));

/* ------------------------------------------- */

let res;

function miResta(a, b) {
    return (a - b);
}

res = miResta(10, 4);

console.log("La resta es: " + res);

/* Ejercicio */

function nameComplete(name, ln1, ln2) {
    return (name + ln1 + ln2);
}

console.log("Mi nombre completo es: " + nameComplete("Rafael Andony", " Argote",  " Nevárez"));

/* --------------------------------------------- */

let div;

function miDiv(a, b) {
    return (a / b);
}

div = miDiv(20, 5);

console.log("El resultado de la división es: " + div);