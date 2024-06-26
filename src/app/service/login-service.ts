import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Credentials } from '../model/credentials';
import { catchError, map, Subject, throwError } from 'rxjs';
import { Recipe } from '../model/recipe';
import { isPlatformBrowser } from '@angular/common';
import * as jwt from 'jsonwebtoken';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `${baseUrl}`; // alt+96
  private httpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:8080/foodia' });
  private listaCambio = new Subject<Recipe[]>();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) {}

  login(creds: Credentials) {
    return this.http.post('http://localhost:8080/authenticate', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      console.log(headers.get('Authorization')!);
      const token = bearerToken.replace('Bearer ', '');
      console.log(token);
      
      // Ensure we are in a browser context before using localStorage
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('token', token);
      }

      return body;
    }));
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

 /* getUser() {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwt.decode(token) as any;
      return decodedToken?.user; // Assuming user information is stored in the token
    }
    return null;
  }

  getUserId() {
    const user = this.getUser();
    if (user) {
      return user.id; // Assuming 'id' is the property that stores the user ID
    }
    return null;
  }*/

    signup(creds: Credentials) {
      return this.http.post(`${this.url}/users/save`, creds, {
        headers: this.httpHeaders,
        observe: 'response'
      }).pipe(
        map((response: HttpResponse<any>) => {
          return response.body;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
    }
  closeSession() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
