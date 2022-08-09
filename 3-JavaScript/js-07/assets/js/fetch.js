const url = "https://dog.ceo/api/breeds/image/random"

//Respuesta de la peticion
fetch(url).then((respuesta) => {
    /* console.log(respuesta); */
})

// Obtener la información
//Forma #1
fetch(url)
.then((respuesta) => respuesta.json())
.then((datos) => {

    console.log(datos);

}).catch((error)=>{ //.catch se ejecuta cuando hay un error
    console.log(error);
})

//Forma #2
async function obtenerPerritoAleatorio() {
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        console.log(datos);

    } catch (error) {
        
        console.log(error);
    }
}

obtenerPerritoAleatorio()

