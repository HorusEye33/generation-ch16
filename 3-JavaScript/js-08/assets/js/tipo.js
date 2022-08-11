/* Tipo predefinido */
// Son clases que ya se encuentran dentro de JavaScript
let tiempo= new Date();
console.log(tiempo);
console.log(Math);

/* Abstraccion */
let obj_literal = {
    nombre: 'Juan',
    edad: 35
}

let obj_constructor = new Object();
obj_constructor.nombre = "Dora";
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal['nombre'];
let llave = 'nombre';
console.log('Esto es con llave ' + obj_literal[llave]); 

/* Tipo Cadena */
let cadena = 'Esto es una cadena';
let cadena_Obj = new String('Esto es otra cadena Obj');

console.log(cadena);
console.log(cadena_Obj);

/* Tipo Númerico */
let numero = 13;
let numero_Obj = new Number(13.13);

console.log(numero);
console.log(numero_Obj);

/* Tipo Compuesto o Unico */
let lista = ['2', '3', '5', '7'];
let lista_Obj = new Array ('1','4','6','8','9');

console.log(lista);
console.log(lista_Obj);
