import net from "net"
import { PositionBufferGt06Decoder } from "../position/domain/PositionBufferGt06";
import { Imei } from "../position/domain/Imei";

export class ServerSocket{
    private imei : Imei | null = null;
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
        
        //On login data set IMEI 
        this.socket.on("data",(loginData)=>{
            if(this.imei != null) return;

            const imeiOnData = Imei.decode(loginData);

            if(imeiOnData == null) return;
                

            this.imei = imeiOnData;

            console.log("IMEI set",this.imei);
        
            

        })
        this.socket.on("data",(bufferDataFromGps)=>{
            
            //Si no se logueo anteriormente no se procesan los datos del gps.
            if(this.imei == null) return;
            
            console.log(bufferDataFromGps);

            const position = PositionBufferGt06Decoder.decode(bufferDataFromGps,this.imei);
            console.log(position);
            //TODO almacenar las ubicaciones en la base de datos de BGM
        })
    }


}