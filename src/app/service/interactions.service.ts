import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Interactions } from '../model/interactions';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class InteractionsService {
  private url = `${base_url}` //OJOx
  private lista = new Subject<Interactions[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<Interactions[]> (this.url+"/interactions/list");
  }
  insert(interaction:Interactions){
    return this.http.post(this.url+ "/interactions/save", interaction);
  }

  setList(listaNueva : Interactions[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}
