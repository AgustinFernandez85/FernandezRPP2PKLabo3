import { Vehiculo } from "./Vehiculo";

export class Camioneta extends Vehiculo{
    constructor(id,marca,modelo,precio,cuatoXcuatro){
        super(id,marca,modelo,precio);
        this.cuatoXcuatro = cuatoXcuatro; 
    }
}