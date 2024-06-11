import { Ingredient } from "./ingredient";
import { Interactions } from "./interactions";
import { RecipeCategory } from "./recipe-category";
import { User } from "./user";

export class Recipe {

    id:number=0;
    title:String="";
    image:String="";
    instructions:String="";
    time:number=0;
    description:String="";
    type:String="";
    favorite:Boolean=true;
    ingredients:Ingredient[]=[];
    recipeCategory:RecipeCategory= new RecipeCategory();
    interactions:Interactions[]=[];
    user:User=new User();
}
