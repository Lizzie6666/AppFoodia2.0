import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { map, Observable, Subject } from 'rxjs';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = `${base_url}` //OJOx
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/foodia'});
  private lista = new Subject<Recipe[]>();
  constructor(private http:HttpClient) { }

  list(): Observable<Recipe[]> {
    console.log(this.url + "/recipe/list");
    return this.http.get<Recipe[]>(this.url + "/recipe/list").pipe(
      map(recipes => recipes.map(recipe => ({
        ...recipe,
        time: +recipe.time // Asegúrate de que 'time' sea un número
      })))
    );
  }
  listByCategory(name:string) : Observable<any>{
    console.log(this.url+"/recipe/recipeListByCategory/"+name);
    //return this.http.get<Recipe[]> (this.url+"/recipe/list",{ 'headers': this.httpHeaders });
    return this.http.get<Recipe[]> (this.url+"/recipe/recipeListByCategory/"+name);
  }
  listByTime(time:string) : Observable<any>{
    console.log(this.url+"/recipe/listByTime/"+time);
    //return this.http.get<Recipe[]> (this.url+"/recipe/list",{ 'headers': this.httpHeaders });
    return this.http.get<Recipe[]> (this.url+"/recipe/listByTime/"+time);
  }
  listById(id:number){
    console.log("ListId:"+this.url+"/recipe/listById/"+id);
    return this.http.get<Recipe>(this.url+"/recipe/listById/"+id);
  }
  search(prefix:string){
    return this.http.get<Recipe[]>(this.url+"/recipe/search/"+prefix);
  }
  filterByType(type:string){
    return this.http.get<Recipe[]>(this.url+"/recipe/filterByType/"+type);
  }
  insert(recipe:Recipe){
    return this.http.post(this.url+ "/recipe/save", recipe);
  }
  update(rec: Recipe){
    return this.http.put(this.url + "/recipe/update",rec);
  }
  delete(id:number){
    return this.http.delete(this.url + "/recipe/delete/" + id);
  }
  setList(listaNueva : Recipe[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}
