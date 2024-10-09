const net = require("net");
const fs = require("fs")
let i = 0;

const tcpServer = net.createServer(
    (socket) => {
        console.log('a client connected');
            
        const writeStream = fs.createWriteStream(`received_data${i}.txt`);

        socket.on("data", (clientData) => {
            console.log("Datos recibidos");
            
            writeStream.write(clientData);            

        })

        socket.on('end', () => {
            console.log('Client disconnected');
            writeStream.end();
            i++;
            console.log("aumentando i",i);
            
        });
        socket.on("error", (e) => {
            console.log("Error",e);
        })
        socket.on("close", (c) => {
            console.log("close",c);
        })
    }
)

tcpServer.listen(3000,()=>console.log("Server on port 3000"))