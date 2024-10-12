import net from "net"

export class Gps110ClientSocket{
    private readonly GPS110_PORT = 7018;
    private readonly GPS110_DOMAIN = "www.gps110.org"
    private client = new  net.Socket()
    constructor(
    ){
        this.startListeningEvents();
    }



    getSocket(){
        return this.client;
    }
    //listener y connect a gps110.org
    startListeningEvents(){
        
   
        this.client.on("error",() => {
            console.log("Error en cliente a gps110");
        })
        this.client.on("end",() => {
            console.log("GPS110 Client disconnected");
        })

        this.client.on("drain",()=> {
            console.log("Drain on gps110 client");  
        })
        this.client.on("data",(data)=>{
            console.log("Data on gps110Client",data);
            
        })
        
        this.client.connect({
            port : this.GPS110_PORT,
            host : this.GPS110_DOMAIN
        })
    }    


}