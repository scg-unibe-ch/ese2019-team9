import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import {first} from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loginForm;
  error;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmitRegistration() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const val = this.loginForm.value;
    this.authService.register(val.email, val.password)
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
