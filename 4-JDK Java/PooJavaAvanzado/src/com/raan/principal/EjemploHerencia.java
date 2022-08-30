package com.raan.principal;

import com.raan.Datos;
import com.raan.herencia.BasePadre;
import com.raan.herencia.Hija;
import com.raan.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Datos data = new Datos();
        data.Data();
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);
        Object miObj = new BasePadre();

        System.out.println("Atributo de Clase BasePadre -> " + objB.getA());
        System.out.println("Atributo de Clase Hijo -> " + ho.getA());
    }
}
