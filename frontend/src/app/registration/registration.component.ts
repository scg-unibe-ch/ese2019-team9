import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
      cpassword: ''
    });
  }

  ngOnInit() {}

  onSubmit(userData) {
    console.log(userData);
    this.loginForm.reset();
  }

}
