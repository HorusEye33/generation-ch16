public class Ejercicios {
    public static void main(String[] args) {

        //Ejercicio 1
        String dibujo = "*";
        int nivel = 5;
        for (int i = 0; i <nivel ; i++) {

            System.out.println(dibujo);
            dibujo = dibujo+"*";

        }
        String dibujo2="";
        //Ejercicio 2
        while(nivel != 0){
            for (int i = 0; i < nivel ; i++) {
                dibujo2 = dibujo2 + "*";
            }
            System.out.println(dibujo2);
            dibujo2 = "";
            nivel--;

        }
    }
}
