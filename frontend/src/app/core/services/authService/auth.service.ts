import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient,
              private router: Router) {}

  loginEndpoint = 'https://moln-api.herokuapp.com/user/login';
  registrationEndpoint = 'https://moln-api.herokuapp.com/user/signup';
  verificationEndpoint = 'https://moln-api.herokuapp.com/user/verify';

  httpOptions: {
    'Content-Type': 'application/json';
    observe: 'response';
  }


register(email: string, password: string) {
    return this.httpClient.post<User>(this.registrationEndpoint, {email, password}, this.httpOptions);
  }

  login(email: string, password: string) {
    return this.httpClient.post<User>(this.loginEndpoint, {email, password}, this.httpOptions )
        .pipe(map(res => {
          this.setSession(res);
          return res;
        }));
  }

  verifyUser(token: string) {
    return this.httpClient.patch(this.verificationEndpoint, { token } , { observe: 'response' });
  }

  private setSession(authResult) {

    localStorage.setItem('token', authResult.token);
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
