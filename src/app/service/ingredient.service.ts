import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private url = `${base_url}` //OJOx
  private lista = new Subject<Ingredient[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<Ingredient[]> (this.url+"/ingredient/list");
  }
  insert(recipe:Ingredient){
    return this.http.post(this.url+ '/ingredient/save', recipe);
  }
  update(rec: Ingredient){
    return this.http.put(this.url + "/ingredient/update", rec);
  }
  delete(id:number){
    return this.http.delete(this.url + "/ingredient/delete/" + id);
  }
  setList(listaNueva : Ingredient[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}
