/* Ejercicio 1

Parte 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden.

Parte 2
Se agregan dos personas más al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?

parte 3
Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola? */


let filaBanco = ["Sofia", "David", "Juan"];
console.log(filaBanco);

filaBanco.push ("Sara", "Agustin");
console.log(filaBanco);

filaBanco.shift();
console.log(filaBanco);

filaBanco.splice(1,0, "Renata");
console.log(filaBanco);

filaBanco.push ("Elena")
console.log(filaBanco);