package com.raan.j_interface;

public class EjemploTest {
    public static void main(String[] args) {
        //Primer forma de instanciacion
        System.out.println("Test.CONV = " + Test.CONV);
        //Segunda forma de instanciacion
        System.out.println("Prueba.CONV = " + Prueba.CONV);
        //Tercer forma de instanciacion
        Prueba p = new Prueba();
        System.out.println("p.CONV = " + p.CONV);

        //Instanciacion de métodos
        Test ts = new Prueba();
        ts.metodo1(3);
        //ts.metodo2("hola");
        System.out.println("ts.metodo2( \"hola\") = " + ts.metodo2( "hola"));
        p.metodoPropio();

        Test1 s1 = new Prueba();
        s1.metodo01();
        System.out.println("s1.metodo02() = " + s1.metodo02());

    }
}

