import { MysqlRepository } from "../../../shared/infraestructure/mysql/MysqlRepository";
import { Position } from "../../domain/Position";



export class MysqlPositionRepository extends MysqlRepository{

    async save(position : Position){
        const primitives = position.toPrimitives();
        try {
            
            await this.getPool().query(
                `INSERT INTO GPS_UBICACIONES (IMEI,LATITUD,LONGITUD,FECHA) VALUES (?)`,
                [[primitives.imei,primitives.latitud,primitives.longitud,primitives.fecha]])
        } catch (error) {
            console.log(error);
            console.log("ERROR NO SE PUDIERON ALMACENAR LAS COORDENADAS");
            
                        
        }

    }

}