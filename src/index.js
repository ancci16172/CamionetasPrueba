const net = require("net");
const fs = require("fs")



const tcpServer = net.createServer(
    (socket) => {

        console.log('a client connected',socket.remotePort);
        const client = new  net.Socket()

   
        client.on("error",() => {
            console.log("Error en cliente a gps110");
        })
        client.on("end",() => {
            console.log("GPS110 Client disconnected");
        })

        client.on("drain",()=> {
            console.log("Drain on gps110 client.");  
        })

        client.on("data",(data) => {
            console.log("datareceived gps110 client -> \n",data,"\n as string: \n",data.toString("utf-8"));

            socket.write(data);
        })


        client.connect({
            port : 7018,
            host : "www.gps110.org"
        })


        
        //const writeStream = fs.createWriteStream(`received_data ${socket.remotePort}.txt`);
        socket.on("message", (data) => {
            console.log("Data message",data);
            
        })
        socket.on("data", (clientData) => {
            console.log("->Datos recibidos");
            console.log(clientData);
            console.log("To hexadecimal");
            console.log(clientData.toString("hex"));
            console.log("To string");
            console.log(clientData.toString("utf-8"));
            console.log("To base 64");
            console.log(clientData.toString("base64"));
            
            //writeStream.write(clientData);
            client.write(clientData);

        })



        socket.on('end', () => {
            console.log('Client disconnected');
            //writeStream.end();
            
        });
        socket.on("error", (e) => {
            console.log("Error",e);
        })
        socket.on("close", (c) => {
            console.log("close",c);
        })
    }
)
const puerto = 5000;
tcpServer.listen(puerto,()=>console.log("Server on port "+puerto));

