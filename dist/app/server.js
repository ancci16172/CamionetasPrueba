"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcpServer = void 0;
const net_1 = __importDefault(require("net"));
const ServerSocket_1 = require("./ServerSocket");
const Gps110ClientSocket_1 = require("./Gps110ClientSocket");
class TcpServer {
    constructor(port) {
        this.port = port;
        this.server = net_1.default.createServer({});
        this.setConnectionListener();
    }
    setConnectionListener() {
        this.server.on("connection", (socket) => {
            const serverSocket = new ServerSocket_1.ServerSocket(socket);
            const client = new Gps110ClientSocket_1.Gps110ClientSocket();
            //Redireccionamiento
            serverSocket.getSocket().on("data", (clientData) => {
                client.getSocket().write(clientData);
            });
            client.getSocket().on("data", (data) => {
                serverSocket.getSocket().write(data);
            });
        });
    }
    //start server
    startListening() {
        this.server.listen(this.port, () => {
            console.log("TCP Server listening on port ", this.port);
        });
    }
}
exports.TcpServer = TcpServer;
