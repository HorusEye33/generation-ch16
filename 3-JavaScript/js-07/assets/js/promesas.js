// Variable que simula los datos pedidos
const saludo = "Hola mundo";
const datos = [{
    nombre: "Rafael",
    apellido: "Argote"
    },
    {
    nombre: "Rafael",
    apellido: "Argote"
    },
    {
    nombre: "Rafael",
    apellido: "Argote"
    }
]

// Función para simular una peticion

function obtenerDatos(){
    //Promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve (datos);
            } else {
                reject("No se pudo obtener datos")
            }
            

        }, 2000)
    })

}

//Forma #1 de resolver las promesas
obtenerDatos().then((datos) => { 

    console.log(datos);

}).catch((error) => {

    console.log("Existe un error en la petición 1");
    console.log(error);
})


//Forma #2 - Funciones asincronas -await async

//Funcion Asincrona async
async function funcionAsincrona() {

    try {

        const datos = await obtenerDatos();// await - Espera a que se resuelva la promesa
        console.log(datos);
        
    } catch (error) {

        console.log(error);
        
    }

    
}

funcionAsincrona();