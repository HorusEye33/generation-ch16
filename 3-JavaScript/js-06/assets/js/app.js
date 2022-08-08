/* MANIPULACIÖN DEL DOM */

/* console.log(document.URL); */

/* getElementById() */

console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el parrafo 1";
console.log(parrafo1.textContent);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow"; 
console.log(parrafo1.style);

/* querySelector() */
// etiqueta = p
// clase = .parrafo
// id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

//\n -- Agrega un salto de linea
//\t -- Agrega una tabulación

/* querySelectorAll() */ //Nos regresa una lista de Nodos - nodeList

const parrafos = document.querySelectorAll("p");
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem";

//css - font-size
//js - fontSize   - lower camel case


//Modificar los atributos de HTML
const enlace = document.getElementById('enlace');
console.log(enlace.href);

enlace.href = 'https://www.youtube.com/';
enlace.target = "_blank";
enlace.textContent = 'Enlace de Youtube';

//Jugando con los atributos

/* const parrafosAll = document.querySelectorAll("p");
console.log(parrafosAll);

parrafosAll.style.backgroundColor = "blue"; 

const enlace = document.getElementById('enlace');
console.log(enlace.href);

enlace.style.backgroundColor = "gray"; */


/* Reemplazar contenido */

const parrafo4 = document.getElementById('parrafo4')
console.log(parrafo4.nodeName);// Nos permite saber el nombre del nodo que estamos utilizando
console.log(parrafo4.textContent);
console.log(document.body.innerHTML);//Nos muestra el HTML que halla en el interior del elemento
console.log(parrafo4.outerHTML);//Muestra el contenido HTML, incluyendo el elemento

/* parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>'; */ //Reemplaza el elemento

/* parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>'; */ //Reemplaza el contenido interno del elemento

/* parrafo4.outerHTML = '<div class = "elemento"><a href="http://google.com">Enlace<a/>Este es un div</div>'; */

//JS permite modificar  css
//utilizando style
//usando ClassList

console.log(parrafo4.classList.contains("elemento"));

const cambiarColor = () => {
    parrafo4.classList.add('elemento');//Añade una clase
}

cambiarColor()

/* const cambiarColor1 = () => {
    parrafo4.classList.toggle('elemento');//Quita una clase
}

cambiarColor1() */