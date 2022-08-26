package com.raan.herencia;

public class BasePadre {
    protected int a;
    private double b;
    private String c;

    //Constructor
    public BasePadre() {

    }

    //Métodos
    public void visualizarA(){
        System.out.println("Object h -> Soy un metodo de la clase");

    }

    public void visualizarABC(){
        System.out.println("Object ho -> Soy el método visualizaABC");
    }
    //Métodos accesores
    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
