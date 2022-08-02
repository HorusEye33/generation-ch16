'use strict';

// Conversión de tipos de datos
// Casteo o Parseo
// casting o parsing

//coersión de tipo de datos
//conversión automatica de tipo de datos

let num = "5";
let num2 = "10";

//Concatenación
// Resultado de unir dos cadenas de texto
//  Unimos un número con una cadena de texto
console.log(num - num2);


/* Number() */
// Convierte cadenas o boobleanos en números

let num3 = false;
console.log(Number(num3));
console.log(num3);

/* String */
//Convierte números o booleanos a cadenas

let num4 = String(4);
console.log(num4);
console.log(typeof(num4));

//Boolean()
// Convierte números y cadenas a booleanos
//0, "", null, undefined, NaN - false
// Faultsy values - valores que tienden a dar falso
/* Todos los demas números los convierte a true
 ya sean positivos o negativos */ 

let num5 = Boolean(NaN);
console.log(num5);
console.log(typeof num5);

