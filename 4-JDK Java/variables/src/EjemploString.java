public class EjemploString {
    public static void main(String[] args) {
        // Declaracion literal
        String curso = "Curso en Java";
        System.out.println("curso = " + curso);
        String nombre = "Rafael";
        // Declaracion por referencia
        String resultado = new String("Curso en Java");
        System.out.println("resultado = " + resultado);

        // Se compara las declaraciones
        boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);
        // Aqui se compara el contenido de las variables
        esigual = curso.equals(resultado);
        System.out.println("esigual = " + esigual);

        //Concatenacion
        String concat = curso + " con  " + nombre;
        System.out.println("concat = " + concat);
        //Concatenacion con metodo concat()
        String dia = "Jueves";
        String concat1 = concat.concat(" ").concat(nombre);
        System.out.println("concat1 = " + concat1);
    }
}
