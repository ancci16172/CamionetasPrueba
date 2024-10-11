"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./app/server");
try {
    const server = new server_1.TcpServer(7000);
    server.startListening();
}
catch (error) {
    console.log("ERROR ON START SERVER");
    console.log(error);
}
