import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './_models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient,
              private router: Router) {}

  loginEndpoint = 'https://moln-api.herokuapp.com/user/login';
  registrationEndpoint = 'https://moln-api.herokuapp.com/user/signup';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  login(email: string, password: string) {
    return this.httpClient.post<User>(this.loginEndpoint, {email, password}, this.httpOptions)
        .pipe(map(res => this.setSession(res)));
  }

  private setSession(authResult) {

    localStorage.setItem('token', authResult.token);
    console.log(authResult.token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedOut() {

  }
}
