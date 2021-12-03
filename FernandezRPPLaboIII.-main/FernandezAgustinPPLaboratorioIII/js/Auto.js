import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo{
    constructor(id,marca,modelo,precio,cantidadPuertas){
        super(id,marca,modelo,precio);
        this.cantidadPuertas= cantidadPuertas;
    }
}