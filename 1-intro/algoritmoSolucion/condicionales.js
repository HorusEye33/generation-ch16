//Control de flujo

/* let nombre = "Rafael Andony";
let edad = 29; */

let nombre = prompt("Escribe tu Nombre");
console.log(nombre);

// casteo - convertir un tipo de dato

let edad = parseInt(prompt("Escribe tu edad"));
console.log(edad);

if (nombre === "Rafael Andony" && edad === 29) {
    // scope - contexto
    console.log("Eres un ");
    console.log("ADMIN 😎");

} else if (nombre === "Maria") {

    console.log("Eres una mentora");
    
} else if (nombre === "Marina") {

    console.log("Eres la jefa");
    
} else {

    console.log("Eres un alumn@ 🤷‍♂️");
}

console.log("Fin del programa");

