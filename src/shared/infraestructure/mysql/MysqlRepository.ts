import {pool} from "./pool"


export class MysqlRepository{

    protected getPool(){
        return pool;
    }

    

}