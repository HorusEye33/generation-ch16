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
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);

        System.out.println("Atributo de Clase BasePadre" + h.getA());
    }
}
