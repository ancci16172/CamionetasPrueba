const ejemploBuffer = Buffer.from([0x18,0x0a,0x0c,0x0c,0x18,0x01])

export class Fecha extends Date{


    //Recibe un buffer con  logitud de 6 
    //con los campos year	month	day	hora min	seg	
    //la fecha del buffer tiene que estar en horario UTC
    static fromBuffer(buffer : Buffer){

        const [year,month,date,hora,min,seg] = buffer;
        const fecha = new Date(`20${year}-${month}-${date}`);
        fecha.setUTCHours(hora,min,seg,0);
        return new Fecha(fecha);        
                
    }

    getValue() : string {
        return this.toISOString();
    }

}

Fecha.fromBuffer(ejemploBuffer)