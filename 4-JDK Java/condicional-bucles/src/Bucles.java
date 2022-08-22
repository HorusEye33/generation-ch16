import java.util.*; // Importar todas las clases del paquete util

public class Bucles {
    public static void main(String[] args) {
        System.out.println("Bucles");
        // let i=1
        // bucle controlado
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }

        //while
        //bucle no controlado
        //La condición se debe de modificar dentro del While

        //Mientras la condicion sea true se ejecutara
        String condicion = "";
        Scanner sc = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        while(!Objects.equals(condicion, "Hola" )) {

            System.out.println("Saludame:");
            condicion = sc.next();
        }

        // El do while es igual al while
        //La diferencia es que se ejecuta la accion por lo menos una vez

        do{
            System.out.println("Saludame x2:");
            condicion = sc.next();
        }while (!Objects.equals(condicion, "Hola") );
    }
}
