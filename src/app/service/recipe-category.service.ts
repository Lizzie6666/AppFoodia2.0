import { Injectable } from '@angular/core';
import { RecipeCategory } from '../model/recipe-category';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {
  private url = `${base_url}` //OJOx
  private lista = new Subject<RecipeCategory[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<RecipeCategory[]> (this.url+"/recipeCategory/list");
  }
  insert(recipe:RecipeCategory){
    return this.http.post(this.url+ "/recipeCategory/save", recipe);
  }
  findRecipeCategoryByName(name:string){
    return this.http.get(this.url+"recipeCategory/findRecipeCategoryByName/"+name);
  }
  findByName(name:string){
    return this.http.get(this.url+"/recipeCategory/findByName/"+name);
  }
  update(rec: RecipeCategory){
    return this.http.put(this.url + "/recipeCategory/update", rec);
  }
  delete(id:number){
    return this.http.delete(this.url + "/recipeCategory/delete/" + id);
  }
  setList(listaNueva : RecipeCategory[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}
