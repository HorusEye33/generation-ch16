let x = 10;
console.log(x.length);


/* Ejercicio de Abstracción */
let persona = {
    nombre: 'Ulises',
    apellido: 'Ramiréz',
    edad: 29,
    email: 'user@server.com',
   nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    },
/* Metodo get - Acceder a atributos del objeto */
    idioma: 'es',
    get idioma1 () {
        return this.idioma.toUpperCase();
    },
    set idioma1 (lang) {
        this.idioma = lang.toLowerCase();
    }
}

/* console.log(persona.leng); */
persona.leng = 'ES';
console.log(persona.idioma1);
console.log(persona.idioma1);


/* Agregando nuevos atributos al objeto */
persona.tel = '5556342512';
/* Se sobreescribe el atributo tel en el objeto raiz */
persona.tel = '5532402510';
console.log(persona);


console.log(persona.nombre);
console.log(persona.nombreCompleto());

let constructor = new Object();
constructor.nombre = "Nathan";
constructor.edad = 31;
console.log(persona);
console.log(constructor);

/* For In */

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

/* Se transforma el objeto en una cadena de caracteres */
let personaString = JSON.stringify(persona);
console.log(personaString);
