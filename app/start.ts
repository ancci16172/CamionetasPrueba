//SET ENV VARIABLES
import "./SetEnviromentVariables";
import {TcpServer} from "./TcpServer"


try {
    const server = new TcpServer(Number(process.env.PORT));
    server.startListening();
} catch (error) {

    console.log("ERROR ON START SERVER");
    console.log(error);

}
