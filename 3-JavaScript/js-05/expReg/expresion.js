let texto = "Hoy parece que va a salir el sol";
let buscar = /sol/; // Se busca el patron con esta variable
console.log(buscar.test(texto)); //Dara true ya que el string sol se encuentra en la variable

let texto01 = "La espero en el aeropuerto de LA";
let buscar01 = /LA/; // Se busca el patron con esta variable
console.log(buscar.test(texto01)); //Dara true ya que el string LA se encuentra en la variable

let texto02 = "t marqué anch"
let buscar02 = /[eo]/;
console.log(buscar02.test(texto02));/* Dara "false ya que no se encuentra "e" u "o" */

let texto03 = "La espero en el aeropuerto de LA";
let buscar03 = /aeiou/; // Se busca las vocales
console.log(buscar03.test(texto03)); 

let texto04 = " o -9";
let buscar04 = /[1-5]/;// Se busca un rango de 1 a 5
console.log(buscar04.test(texto04));

let texto5 = "Los números primos son 235 7 dentro de los 10 primeros números";
let buscar5 = /\d{3}/; //Se busca un digito de 3 números 
console.log(buscar5.test(texto5));

let texto6 = "usuario@servidor.com";
let buscar6 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/; // Se usa para validar un correo.  
console.log(buscar6.test(texto6));

