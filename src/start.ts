import {TcpServer} from "../app/server"
import {config} from "dotenv";

type envFiles = "development" | "production"

try {
    config({path : `../.env.${process.env.NODE_ENV as envFiles}`});
    
    const server = new TcpServer(Number(process.env.PORT));
    server.startListening();
    
} catch (error) {

    console.log("ERROR ON START SERVER");
    console.log(error);

}
