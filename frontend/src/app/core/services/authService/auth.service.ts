import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import  decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient,
              private router: Router) {}

  loginEndpoint = 'https://moln-api.herokuapp.com/user/login';
  registrationEndpoint = 'https://moln-api.herokuapp.com/user/signup';
  verificationEndpoint = 'https://moln-api.herokuapp.com/user/verify';
  resendEndpoint = 'https://moln-api.herokuapp.com/user/resend';
  forgotPasswordEndpoint = 'https://moln-api.herokuapp.com/user/forgot';
  resetEndpoint = 'https://moln-api.herokuapp.com/user/reset';

  httpOptions: {
    'Content-Type': 'application/json';
    observe: 'response';
  }

  register(email: string, password: string) {
    return this.httpClient.post<User>(this.registrationEndpoint, {email, password}, this.httpOptions)
        .pipe(map(res => {
          this.setUser(res);
          return res;
        }));
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

  resendEmail() {
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    return this.httpClient.post(this.resendEndpoint, { id, email }, { observe: 'response'});
  }

  forgotPassword(email: string) {
    return this.httpClient.post(this.forgotPasswordEndpoint, { email }, { observe: 'response'});
  }

  resetPassword(token: string, password: string) {
    return this.httpClient.patch(this.resetEndpoint, { token, password }, { observe: 'response'});
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult.token);
  }

  private setUser(registrationResult) {
    localStorage.setItem('id', registrationResult.createdUser._id);
    localStorage.setItem('email', registrationResult.createdUser.email);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public isLoggedIn() {
    if (!Boolean(this.getToken())){
      return false;
    }
    const payload = decode(this.getToken());
    const expiration = payload.exp;
    const dateNow: number = Math.floor(Date.now()/1000);
    const expired = expiration - dateNow < 0;
    if (expired) {
        localStorage.removeItem('token');
    }
    return !expired;
  }

  public isAdmin():boolean{
    const payload = decode(this.getToken());
    return payload.admin;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getId(): string {
    const payload = decode(this.getToken());
    return payload.userId;
  }
}
