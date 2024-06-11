import { Role } from "./role";

export class User {
    id:number=0;
    username:String="";
    password:String="";
    enabled:Boolean=true;
    roles:Role[]=[];
}
