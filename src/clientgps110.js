const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname,"..","received_data 54489.txt"));
const net = require("node:net");


const client = new  net.Socket()

client.on("connect",() => {
    
    console.log("Cliente conectado");
    client.write(data); 
    
    // client.end()

})

client.on("error",() => {
    console.log("Error en cliente a gps110");
})

client.on("drain",()=> {
    console.log("Drain on gps110 client.");  
})

client.on("data",() => {
    console.log("datareceived");   
})


client.connect({
    port : 7018,
    host : "www.gps110.org"
})