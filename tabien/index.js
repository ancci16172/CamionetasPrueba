import fs from "fs"
import path from "path"
import {fileTypeFromBuffer} from "file-type"

const url = "C:\\E - R\\Camionetas\\tabien\\received_data 54489.txt"

const data = fs.readFileSync(url);
let utfData = data.toString("utf-8");
console.log(utfData);


async function  f(){

    const a = await fileTypeFromBuffer(data)
    console.log("tipo",a);
    
}

f()
  
