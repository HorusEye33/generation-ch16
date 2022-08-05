/* Arreglos
    *Es una coleccionde elementos.
    *Cada elemento ocupa una posicion
    *Esa posición se conoce como indice
     y comienza a partir de cero
*/

let arr = [1, 2, 3, 4];
console.log(arr);

//propiedades - describen
//métodos - acciones que puede realizar

console.log(arr[2]);
arr[4] = 190;
arr[4] = "Hola";
console.log(arr);



//Métodos de arreglos

const arreglo = ["adios"];

//push() Agrega un elemnto al final del arreglo

arreglo.push(2);
arreglo.push(true);

let num = 500;
arreglo.push(num);
console.log(arreglo);


//unshift() - Agrega un  elemento al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

console.log(typeof(arreglo[4]));


//Metodos para quitar elementos

//pop() - Quita un elemento del final del arreglo

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);


//shift() - Quita un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);


//splice() - Quita una parte de cualquier posicion de nuestro arreglo
// Permite reeplazar un elemento
// Permite insertar un elemento/s en una pocisión en específico
arreglo.splice(1, 1, "parangaricutirimicuaro",568980);
/* splice(posicion de inicio,
          cantidad de elementos a afectar,
          elementos que queremos insertar) 
*/
console.log(arreglo);

//Modifican el arreglo original

/* --------------------------------------------------------------------- */

//Métodos que no modifican el arreglo original
// Hacen una copia y modifican esa copia

//slice() - Cortar partes de un arreglo

let dato3 =arreglo.slice(0, 2);

//Debemos indicar un rango
//Genera un arreglo con los elementos cortados

/* slice(posicion a partir de la cual va a empezar a cortar,
         posicion de hasta donde queremos cortar) */

console.log(dato3);

console.log(arreglo);