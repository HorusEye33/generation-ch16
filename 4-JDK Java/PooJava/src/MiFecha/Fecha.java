package MiFecha;

public class Fecha {
    private int dia;
    private int mes;
    private int anio;

    //Constructor
    public Fecha() {
    }

    //Métodos Getter y Setter
    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAnio() {
        return anio;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    //Método para dar forma a la fecha
    public String formatoF(){
        return ""+getDia()+"/"+getMes()+"/"+getAnio();
    }
}
