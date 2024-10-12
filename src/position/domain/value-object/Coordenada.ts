const bufferDeEjemplo= Buffer.from([0x03,0xb2,0x69,0xe3]);

export class Coordenada{


    constructor(
        private value : number
    ){

    }




    //Recibe un buffer de longitud 4 bytes
    static fromBuffer(buffer : Buffer){
        const hex = buffer.toString('hex');

        return new Coordenada((parseInt(hex,16)/30000/60) * -1);
    }


}
