import { Injectable } from '@angular/core';
import { Role } from '../model/role';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private url = `${base_url}` //OJOx
  private lista = new Subject<Role[]>();
  constructor(private http:HttpClient) { }

  insert(role:Role){
    return this.http.post(this.url+ "/roles/save", role);
  }
  setList(listaNueva : Role[]){
    this.lista.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.lista.asObservable();
  }
}
