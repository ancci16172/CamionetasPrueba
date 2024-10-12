import { Imei } from "./Imei";
import { Coordenada } from "./value-object/Coordenada";
import { Fecha } from "./value-object/Fecha";



export class Position{
    constructor(
        private imei : Imei,
        private latitud : Coordenada,
        private longitud : Coordenada,
        private fecha : Fecha
    ){
}
    toPrimitives(){
        return {
            imei : this.imei.getValue(),
            latitud : this.latitud.getValue(),
            longitud : this.longitud.getValue(),
            fecha : this.fecha.getValue() 
        }
    }

}
