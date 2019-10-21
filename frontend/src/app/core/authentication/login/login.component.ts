import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/authService/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;
  submitted = false;
  message;
  messageReceived = false;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      });
  }

    // getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmitLogin() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      const val = this.loginForm.value;
      this.authService.login(val.email, val.password)
          .pipe(first())
          .subscribe(
              data => {
                   if (data.status === 200 ) {
                      this.loginForm.reset();
                  }
              },
              error => {
                  this.messageReceived = true;
                  if (error.status === 401 && error.statusText === 'Authentication failed') {
                      this.messageReceived = true;
                      this.message = error.statusText;
                  } else if (error.status === 401 && error.statusText === 'Email not verified') {
                      this.messageReceived = true;
                      this.message = error.statusText;
                  } else {
                      this.message = 'Login failed';
                  }
              }
          );
  }

}
