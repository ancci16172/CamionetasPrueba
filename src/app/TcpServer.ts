import net, { Server } from "net"
import { ServerSocket } from "./ServerSocket";
import { Gps110ClientSocket } from "./Gps110ClientSocket";
export class TcpServer{


    private server : Server
    constructor(
        private port : number
    ){
        
        this.server = net.createServer({})
        this.setConnectionListener();
    }


    private setConnectionListener(){
        this.server.on("connection",(socket : net.Socket)=>{

            const serverSocket = new ServerSocket(socket);
            const client = new Gps110ClientSocket();

            //Redireccionamiento
            serverSocket.getSocket().on("data", (clientData) => {
                client.getSocket().write(clientData);
            })
            client.getSocket().on("data",(data) => {
                serverSocket.getSocket().write(data);
            })
    


        })
    }



    
    //start server
    startListening(){
        this.server.listen(this.port,() => {
            console.log("TCP Server listening on port ",this.port);
        })
    }

}
