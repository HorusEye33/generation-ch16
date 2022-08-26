package MiEjemploJava;

public class Persona {
        //Atributos
        private String nombre;
        private int edad;
        private int nss;

    //Metodo Setter
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }

    //Constructor
    /*public Persona(String nuevoNombre, int nuevaEdad, int nuevoNss) {
        this.nombre = nuevoNombre;
        this.edad = nuevaEdad;
        this.nss = nuevoNss;
    }*/

    //Método Getter
    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }

    //Métodos
    public void caminar(){
            System.out.println("Paso a pasito");
        }
         public void dormir(){
            System.out.println("zzzZZZ");
        }

}
