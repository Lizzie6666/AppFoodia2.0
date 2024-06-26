import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}` //OJOx
  private lista = new Subject<User[]>();
  constructor(private http:HttpClient) { }

  list() : Observable<any>{
    return this.http.get<User[]> (this.url+"/users/list");
  }
  insert(user:User){
    return this.http.post(this.url+ "/users/save", user);
  }
  findUserByUsername(name:string){
    return this.http.get(this.url+"/users/findUserByUsername/"+name);
  }
  findByUsername(name:string){
    return this.http.get(this.url+"/users/findByUsername/"+name);
  }
  setList(listaNueva : User[]){
    this.lista.next(listaNueva);
  }
  getList(){
    return this.lista.asObservable();
  }
}
