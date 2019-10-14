import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;
  endpoint = 'http://localhost:8080/user/signup';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
      private formBuilder: FormBuilder,
      private rest: RestService,
      private httpClient: HttpClient) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {}

  onSubmit(userData) {
    this.httpClient.post(this.endpoint, {
      email: userData.email,
      password: userData.password
    }, this.httpOptions).pipe();
    this.loginForm.reset();
  }
}
