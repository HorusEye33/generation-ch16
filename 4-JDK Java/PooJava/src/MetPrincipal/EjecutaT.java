package MetPrincipal;

import EjemplosResumen.misClases.Animal;
import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opción ->");
        int op;

        do {

            op = sc.nextInt();

            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;
                case 2:
                    Persona p = new Persona();
                    p.setNombre("Diego");
                    p.setEdad(32);
                    p.setNss(14689);

                    System.out.println("El valor de la variable de instancia p.nombre -> " + p.getNombre());
                    System.out.println("El valor de la variable de instancia p.edad -> " + p.getEdad());
                    System.out.println("El valor de la variable de instancia p.nss -> " + p.getNss());
                    break;
                case 3:
                    Fecha date = new Fecha();
                    date.setDia(21);
                    date.setMes(1);
                    date.setAnio(2022);
                    System.out.println(date.formatoF());
                    break;
                case 4:
                    Animal miAnimal = new Animal("Falco");
                    miAnimal.setEdad(3);
                    System.out.println("El nombre es: " + miAnimal.getNombre());
                    System.out.println(" y tiene " + miAnimal.getEdad());
                    break;
                default:
                    System.out.println("Adios");
                    break;

            }
        }while (op <= 4);
    }
}
