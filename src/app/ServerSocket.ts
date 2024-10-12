import net from "net"
import { PositionBufferGt06Decoder } from "../position/domain/PositionBufferGt06";

export class ServerSocket{

    constructor(
        private socket : net.Socket
    ){
        

        this.startListeningEvents();

    }
    
    getSocket(){
        return this.socket;
    }
  
    startListeningEvents(){


        this.socket.on('end', () => {
            console.log('Client disconnected');            
        });
        this.socket.on("error", (e) => {
            console.log("Error",e);
        })
        this.socket.on("close", (c) => {
            console.log("close",c);
        })
        this.socket.on("data",(bufferDataFromGps)=>{
            console.log(bufferDataFromGps);
            const position = PositionBufferGt06Decoder.decode(bufferDataFromGps);
            console.log(position);
            //TODO almacenar las ubicaciones en la base de datos de BGM
        })
    }


}