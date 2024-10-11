"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gps110ClientSocket = void 0;
const net_1 = __importDefault(require("net"));
class Gps110ClientSocket {
    constructor() {
        this.GPS110_PORT = 7018;
        this.GPS110_DOMAIN = "www.gps110.org";
        this.client = new net_1.default.Socket();
        this.startListeningEvents();
    }
    getSocket() {
        return this.client;
    }
    //listener y connect a gps110.org
    startListeningEvents() {
        this.client.on("error", () => {
            console.log("Error en cliente a gps110");
        });
        this.client.on("end", () => {
            console.log("GPS110 Client disconnected");
        });
        this.client.on("drain", () => {
            console.log("Drain on gps110 client");
        });
        this.client.on("data", (data) => {
            console.log("Data on gps110Client", data);
        });
        this.client.connect({
            port: this.GPS110_PORT,
            host: this.GPS110_DOMAIN
        });
    }
}
exports.Gps110ClientSocket = Gps110ClientSocket;
