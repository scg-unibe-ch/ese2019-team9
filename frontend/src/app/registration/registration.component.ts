import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RxReactiveFormsModule, RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loginForm;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required, RxwebValidators.compare({fieldName: 'password'})]
    });
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {}

  onSubmit(userData) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    console.log(userData);
    this.loginForm.reset();
  }

}
