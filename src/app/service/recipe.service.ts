import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = `${base_url}` //OJOx
  private lista = new Subject<Recipe[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<Recipe[]> (this.url+"/recipe/list");
  }
  search(prefix:string){
    return this.http.get<Recipe>(this.url+"/recipe/search/"+prefix);
  }
  filterByType(type:string){
    return this.http.get<Recipe>(this.url+"/recipe/filterByType/"+type);
  }
  insert(recipe:Recipe){
    return this.http.post(this.url+ '/recipe/save', recipe);
  }
  update(rec: Recipe){
    return this.http.put(this.url + "/recipe/update", rec);
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
