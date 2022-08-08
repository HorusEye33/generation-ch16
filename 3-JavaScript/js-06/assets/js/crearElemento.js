// Crear un elemento

const imagen = document.createElement('img');

//Modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagenes aleatorias de animales';


//Lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen);// Despues del comienzo
document.body.insertAdjacentElement("afterend", imagen);// Despues del final
document.body.insertAdjacentElement("beforebegin", imagen);// Antes del principio
document.body.insertAdjacentElement("beforeend", imagen);// Antes del final

// Forma correcta de crear e insertar un elemento
// 1.- Se crea el elemento que contendra la imagen
// 2.- Seleccionar el elmento padre
const placeImg = document.getElementById('padreImg');

// 3.- Crear el elemento
const imagen2 = document.createElement('img');

// 4.- Modificamos los atributos del elemento
imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt = "Imagenes de naturaleza";

// 5.- Insertar elemento
padreImg.appendChild(imagen2);



// Utilizar forEach para pintar datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];

const listaFrutas = document.getElementById('frutas');

//Forma 1

/* frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element
    listaFrutas.appendChild(li);
}); */

//Forma 2

frutas.forEach((el) => {
   listaFrutas.innerHTML += `<li>${el}</li>`; 
});

