package com.raan;

import com.raan.herencia.BasePadre;

import java.util.Scanner;

public class Datos {
    public void Data() {
        BasePadre father = new BasePadre();

        System.out.println("1.- Valor de A");
        System.out.println("2.- Valor ABC");

        Scanner sc = new Scanner(System.in);

        int op;

        do{
            op = sc.nextInt();
            switch (op) {
                case 1:
                    System.out.println("El valor de A es: " + father.getA());
                    break;
                case 2:
                    System.out.println("El valor de A,B,C es: " + father.getA() + father.getB() + father.getC());
                    break;
                default:
                    break;
            }


        }while(op <= 2);
    }
}
