package com.raan.j_interface;
//Clase de tipo Interface
//Interfaz 1
public interface Test {
    int CONV=8;
    void metodo1(int x);
    String metodo2(String s);
}


//Clas en donde se implementan los métodos
class Prueba implements Test,Test1{
    //Métodos implementados
    @Override
    public void metodo1(int x) {
        System.out.println("Hola metodo1 parametro x --> "+x);
    }
    @Override
    public String metodo2(String s) {
        return "este parametro es s -->" +s;
    }
    public void metodoPropio(){
        System.out.println(" soy el metodo propio");
    }


    @Override
    public void metodo01() {
        System.out.println("Hola soy el metodo de Test1 metodo01");
    }

    @Override
    public String metodo02() {
        return "hola metodo 02";
    }
}

