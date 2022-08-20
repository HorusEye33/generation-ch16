import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {

        int i = 5, j =4, suma = i +j;
        System.out.println("suma = " + suma);
        //Concatena los numeros
        System.out.println("i + j = " + i + j);
        //Suma los numeros que estan en el parentesis
        System.out.println("(i + j) = " + (i + j));

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("(i - j) = " + (i - j));

        int multi = i * j;
        System.out.println("multi = " + multi);
        System.out.println("(i * j) = " + (i * j));
        
        //Incorrecto
        int div = i / j;
        System.out.println("div = " + div);
        //Correcto
        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);
        
        int resto = i % j;
        System.out.println("resto = " + resto);
        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);
        //Con String
        System.out.println("¿Cúal es tu nombre?");
        String dato = scanner.next();
        System.out.println("Mi nombre es: " + dato);

        Scanner scanner1 = new Scanner(System.in);
        //Con Integer
        System.out.println("¿Cúal es tu edad?");
        String dato1 = scanner1.next();
        int edad = Integer.parseInt((dato1));
        System.out.println("Mi edad es: " + edad);
    }
}
