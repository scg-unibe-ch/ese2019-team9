import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) {}

  endpoint = 'http://localhost:8080/user/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  login(email: string, password: string){
    return this.httpClient.post(this.endpoint, {email, password}, this.httpOptions)
        .shareReplay();

  }
}
