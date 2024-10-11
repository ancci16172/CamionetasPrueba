import net from "net"

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
    }


}