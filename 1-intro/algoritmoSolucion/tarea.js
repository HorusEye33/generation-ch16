

let numero = prompt("Escribe un número:");

function divisibilidad () {

    if ((numero % 7 == 0) && (numero % 8 == 0)) {

        return true;
        
    } else {

        return false;
        
    }
    
}

let resultado = divisibilidad();
console.log(resultado);