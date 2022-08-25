package MiEjemploJava;

public class Persona {
        //Atributos
        private String nombre;
        private int edad;
        private int nss;

        //Constructor
    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

        //Métodos
        void caminar(){
            System.out.println("Paso a pasito");
        }
        void dormir(){
            System.out.println("zzzZZZ");
        }

}
