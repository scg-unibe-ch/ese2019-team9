import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;
  error;


  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmitLogin() {
    const val = this.loginForm.value;
    this.authService.login(val.email, val.password)
        .pipe(first())
        .subscribe(
            data => {
              this.loginForm.reset();
            },
            error => {
              this.error = error;
            }
        );

  }

}
