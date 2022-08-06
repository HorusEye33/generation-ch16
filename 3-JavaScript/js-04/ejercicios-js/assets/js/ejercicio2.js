/* Ejercicio 2
Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.

*
* *
* * *
* * * *
* * * * * */

//Con un for

let imprimir ="*";
for(let i=0; i<5; i++){
    console.log(imprimir);
    imprimir = imprimir+" *"
}

//Con for anidado

let astericos = "";

for (let i = 0; i < 6; i++) {
    let patron = "";
    for (let j = 0; j < i; j++) {
        patron = patron + " *";   
    }
    console.log(patron);
}



for (let i = 0; i < 5; i++) {
    console.log("for principal " + i);
    for (let j = 0; j < 10; j++) {
        console.log("for interno " + j);
        
    }
    
}


// Arbolito de Navidad


// definimos la anchura máxima
let max=11;
// variables de interación
let j=1,k=1;
// contiene el resultado a mostrar
let result="";


    for(let i=k;i<=max;i+=2){
        result+="\n"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join("*"));
        j=j+1;
    }
    k=5;
    j=3;

//tronco
if(max>=7)
{
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
}

console.log(result);