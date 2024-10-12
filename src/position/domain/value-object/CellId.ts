


export class CellId{
    constructor(private value : number){
    
    }

    //Buffer de 3 bytes
    static fromBuffer(buffer : Buffer){
        const hex = buffer.toString('hex');
        return new CellId(parseInt(hex,16));
    }

}
