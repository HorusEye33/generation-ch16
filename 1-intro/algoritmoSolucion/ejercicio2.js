let empleado = "Rafael"
let sueldoDiario = 600;
let semanaMes = prompt("¿Que desea calcular?")

if (semanaMes === "semana") {

    console.log(empleado + " gana " + sueldoDiario * 5 + " por semana");

} else if (semanaMes === "mes") {
    
    console.log(empleado + " gana " + sueldoDiario * 30 + " por mes");
    
}