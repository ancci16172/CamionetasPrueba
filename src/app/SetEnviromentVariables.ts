import path from "path"
import {config} from "dotenv"

const envUrl = path.join(__filename,"..","..","..",".env."+process.env.NODE_ENV);

config({path : envUrl});