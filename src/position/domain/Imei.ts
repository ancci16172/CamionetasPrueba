
export class Imei{

    constructor(
        private value : number
    ){

    }

    getValue(){
        return this.value;
    }

    static decode(buffer : Buffer){
        //Si no es un inicio de sesion no ejecuta el login
        if(buffer.at(3) != 0x01) return null;

        const imeiAsString = buffer.subarray(4,12).toString("hex")
        const imeiAsNumber = parseInt(imeiAsString);
        return new Imei(imeiAsNumber);
    }

}