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
  showingPassword = false;
  type = 'password';

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
  get form() { return this.loginForm.controls; }

  showPassword(bool: boolean) {
      this.showingPassword = bool;
      this.type = this.showingPassword ? 'text' : 'password';
  }

  onSubmitLogin() {

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
                  if (error.status === 401 && error.error.message === 'Authentication failed') {
                      this.messageReceived = true;
                      this.message = error.error.message;
                  } else if (error.status === 401 && error.error.message === 'Email not verified') {
                      this.messageReceived = true;
                      this.message = error.error.message;
                  } else {
                      this.message = 'Login failed';
                  }
              }
          );
  }

}
