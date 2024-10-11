"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocket = void 0;
class ServerSocket {
    constructor(socket) {
        this.socket = socket;
        this.startListeningEvents();
    }
    getSocket() {
        return this.socket;
    }
    startListeningEvents() {
        this.socket.on('end', () => {
            console.log('Client disconnected');
        });
        this.socket.on("error", (e) => {
            console.log("Error", e);
        });
        this.socket.on("close", (c) => {
            console.log("close", c);
        });
    }
}
exports.ServerSocket = ServerSocket;
