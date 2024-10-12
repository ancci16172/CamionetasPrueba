import { Imei } from "./Imei";
import { CellId } from "./value-object/CellId";
import { Coordenada } from "./value-object/Coordenada";
import { Fecha } from "./value-object/Fecha";

const buffer = Buffer.from([
  0x78, 0x78, 0x22, 0x22, 0x18, 0x0a, 0x0b, 0x0b, 0x25, 0x2d, 0xca, 0x03, 0xb2,
  0x6a, 0x24, 0x06, 0x4a, 0x6c, 0xf9, 0x00, 0x18, 0x00, 0x02, 0xd2, 0x22, 0x13,
  0xba, 0x00, 0x0c, 0xe4, 0x00, 0x00, 0x00, 0x0e, 0xa9, 0xae, 0x5b, 0x0d, 0x0a,
]);

export class PositionBufferGt06Decoder {
  //Indica que el buffer es una posicion.
  private static readonly LOCATION_TYPE_IDENTIFIER = 0x22; 

  static decode(buffer: Buffer,imei : Imei) {

    if(buffer.at(3) !== this.LOCATION_TYPE_IDENTIFIER){
      return null;
    }

    const bufferLength = buffer.at(2);
    const bufferType = buffer.at(3);
    const fechaFromBuffer = Fecha.fromBuffer(buffer.subarray(4,10))
    const latitud = Coordenada.fromBuffer(buffer.subarray(11,15))
    const longitud = Coordenada.fromBuffer(buffer.subarray(15,19))
    const velocidad = buffer.at(19);
    const cellId = CellId.fromBuffer(buffer.subarray(27,30));

    return {
      fecha: fechaFromBuffer,
      latitud: latitud,
      longitud: longitud,
      velocidad: velocidad,
      cellId: cellId,
      imei
    }
    
  }
}

