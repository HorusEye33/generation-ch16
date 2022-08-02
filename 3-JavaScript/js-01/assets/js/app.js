"use strict"; //JavaScipt de forma estricta


/* Tipos de variables */
let a = 20; //Local
const b = 0;//Constante y local

var c;//Global

const PI = 3.1416;

/* 
Scope =contexto
espacio en el que vive la variable
 */


if (true) {
    var d = 15;
}

//var d = "hola";
d = "hola";

//console.log(d);

/* Tipos de datos */

//String
let cadena = "Hola Mundo!";
let cadena2 = 'Hola Mundo!';

//Number
let numero = 5;
let numero1 = 5.89;
let numero2 = -5.89;

//Boolean
let booleano = true;
let booleano1 = false;

//Undefined = Indefinido
let variable;
console.log(variable);

//Null
let vacio = null;
//console.log(vacio);

//NaN = Not a Number
//no es un Número
/* trata de realizar alguna 
operación aritmética con algún dato 
que no es un número
 */

/* Plantillas literales
      emplate strings
      literal strings
      interpolación ${5+4}
 */

/* console.log(`Esta es una cadena ${5+4}`); // PLantilla literal
console.log("Esta es una cadena normal ${5+4}"); */

let nombre = 'Rafael';

/* console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);

console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices -arrays */

let arr = [1, "A", null, undefined, [true, false]];
//Notación de carchetes
//console.log(arr[4][0]); //De esta forma se accede al primer elemento del arreglo que esta dentro del primer arreglo.

if (arr[4][0] === true) {
    //console.log("es verdad");    
}

let arr2 = new Array("8", 2);
//console.log(arr2);

/* Objetos */
// clave / valor

const persona = {
    nombre:'Rafael', 
    edad: 29,
    hobbies: [
        "Leer",
        "Ver pelis y series",
        "Comer",
    ],
    auto: {
        marca: "Volkswagen",
        modelo: "Pointer",
        year: 2000,
    },
    saludar: function () {
        return "Hola";
    }
};

//Notación de punto
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);
console.log(`La marca de mi carro es ${persona.auto.marca}`);
console.log(`Yo solo quiero decir ${persona.saludar()}`);





//Arreglo de objetos
/* [{},{},{},] */