import { Recipe } from "./recipe";
import { User } from "./user";

export class Interactions {
    id:number=0;
    description:string="";
    score:number=0;
    user:User=new User();
    recipe:Recipe=new Recipe();
}
