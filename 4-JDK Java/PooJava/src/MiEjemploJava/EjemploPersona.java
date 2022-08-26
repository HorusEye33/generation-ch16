package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        //Instancia = relacion Objeto-Clase
        Persona p = new Persona();
        p.setNombre("Diego");
        p.setEdad(32);
        p.setNss(14689);

        System.out.println("El valor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("El valor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("El valor de la variable de instancia p.nss -> " + p.getNss());
    }

}
