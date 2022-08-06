let texto = "Hoy parece que va a salir el sol";
let buscar = /sol/; // Se busca el patron con esta variable
console.log(buscar.test(texto)); //Dara true ya que el string sol se encuentra en la variable

let texto01 = "La espero en el aeropuerto de LA";
let buscar01 = /LA/; // Se busca el patron con esta variable
console.log(buscar.test(texto01)); //Dara true ya que el string LA se encuentra en la variable

let texto02 = "t marqué anch"
let buscar02 = /[eo]/;
console.log(buscar02.test(texto02));/* Dara "false ya que no se encuentra "e" u "o" */