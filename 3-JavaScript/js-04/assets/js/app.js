// for (control; condicion; modificador)

//0 - 4  => 5 ya no se cuenta
for (let i = 1; i < 5; i++) {
  // i = i + 1
  console.log(i);
}

//en decremento:

for (let i = 10; i < 0; i--) {
  console.log(i);
}

/* console.log("El valor de i es: " + i); */

//while
//no controlado
//Va a ejecutar la condicion hasta que haya un break que lo detenga

let control = 0; // control

while (control < 5) {
  // condicion
  console.log("while: " + control);

  control++; // modificador
}

let control2 = true;

while (control2 === false) {
  alert("Estoy trabajando");
}

//Do... while
//Hacer... hasta o mientras

let numero = 0;

// iterar  - cada ejecucion de un ciclo

do {
  console.log("Do...While: " + numero);
  numero++;
} while (false);
