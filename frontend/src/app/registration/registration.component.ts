import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MustMatch } from '../_helpers/must-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loginForm;
  submitted;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {}

  onSubmit(userData) {
    console.log(userData);
    this.loginForm.reset();
  }

}
