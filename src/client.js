const net = require("net");


const client =new  net.Socket()



client.on("connect",() => {
    console.log("Cliente conectado");
    client.write("OTRA COSAA"); 
    client.end()

})
client.on("lo")
client.on("error",() => {
    console.log("Error");
})


client.connect({
    port : 3000,
    host : "localhost"
})