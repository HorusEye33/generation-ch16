public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;// Declarar el objeto
        objSaludo = new Saludo();//Crear objeto con new
        objSaludo.saludar();//LLamando al método

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto: -> " + objSaludo0.saludar0());
    }
}
