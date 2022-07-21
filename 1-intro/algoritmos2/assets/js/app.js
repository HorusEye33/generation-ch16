function saludar () {

    console.log("Hola Mundo");
    
}

//saludar();

//Arreglos = array

let num = [];
console.log(num);

let arr1 = new Array();
console.log(arr1);

//Usar un arreglo

const arr = [1, 2, 3, 4, 5];
console.log(arr);
//Notación de corchetes []
console.log(arr[3]);
//Agregar elementos en el Arreglo
arr[5] = 25;
arr[6] = 8;
arr[6] = 0;

//arr[7] = undefined;
//arr[8] = undefined;
//arr[9] = undefined;

arr[10] = 40;

arr[7] = 9;

console.log(arr);

// Propiedades de los Arreglos
// Son como la descripcion de nuestro arreglo.
console.log(arr.length); //lenght = Numero de celdas en el arreglo

//Métodos
//acciones que puede realizar un arreglo

const frutas = ["Manzana", "Plátano"];
console.log(frutas);

//push()
//Nos permite agregar un valor al final del arreglo

let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);

console.log(frutas);

//pop()
//Elimina el ultimo elemento del arreglo

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

//unshift()
//Agrega un elemento al inicio de un arreglo y devuelve el tamaño del arreglo 
//una vez que se haya agregado los elementos.

let devolver = frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);

//shift
//Elimina el primer elemento del arreglo y tambien lo retorna

let frutaQuitada = frutas.shift();
console.log(frutas);
console.log(frutaQuitada);

//Arreglo multidimensional
const newArr = [1, 45, "Hola", "Adiós", true, null, 
[30, 31, 32], ["Azul", "Amarillo", "Verde"]];

console.log(newArr[6][1]);
console.log(newArr[7][1]);

//Objetos
//Estructura especial llamada  objeto
//Nos permiten guardar pares de Valores
// key - value 
//llave -valorr

const obj = { 
    nombre : "Pedro", 
    edad : 25,
    color : "Azul",
    hobbies : ["Leer", "Correr"],
    newArr : newArr
};

console.log(obj.edad);
console.log(obj.hobbies[1]);