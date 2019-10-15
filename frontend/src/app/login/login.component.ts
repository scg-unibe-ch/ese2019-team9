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
  submitted = false;


  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
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
                  this.loginForm.reset();
              },
              error => {
                  this.error = error;
              }
          );
  }

}
