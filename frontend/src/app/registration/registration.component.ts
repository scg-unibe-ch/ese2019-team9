import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {}

  onSubmit(userData) {
    console.log(userData);
    this.loginForm.reset();
  }

}
