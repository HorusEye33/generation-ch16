package EjemplosResumen.misClases;
import EjemplosResumen.misClases.Animal; //Importamos la clase Animal para poder usarla

public class Ejemplo {
    public static void main(String[] args)
    {
        //Creamos un animal cuyo nombre será Falco
        Animal miAnimal = new Animal("Falco");
        //Le establecemos 3 años de edad a Falco.
        miAnimal.setEdad(3);
        //Mostraremos el nombre del animal por pantalla
        System.out.println("El nombre es: " + miAnimal.getNombre());
        //Mostraremos la edad del animal por pantalla
        System.out.println(" y tiene " + miAnimal.getEdad());
        //Este código deberia imprimir "El nombre es: Falco y tiene 3 años"

    }
}
