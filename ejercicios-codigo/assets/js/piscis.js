let cantidadARetirar;
let montoTotal = 10000;

function depositarDinero(montoTotal) {
    let cantidadADepositar = parseInt(prompt("Ingrese la cantidad a depositar"));
    montoTotal = montoTotal + cantidadADepositar;
    return (montoTotal);
}

let saldoFinal = depositarDinero(montoTotal);
console.log(saldoFinal);



function retirarDinero(montoTotal) {
    let montoARetirar = parseInt(prompt("Ingrese la cantidad a retirar"));
    montoTotal = montoTotal - montoARetirar; 
    return (montoTotal);
}

let saldoFinal2 = retirarDinero(saldoFinal);
console.log(saldoFinal2);

 






