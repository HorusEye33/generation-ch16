package MiFecha;

public class EjemploFecha {
    public static void main(String[] args) {

        Fecha date = new Fecha();

        date.setDia(21);
        date.setMes(1);
        date.setAnio(2022);

        System.out.println(date.formatoF());
    }
}
