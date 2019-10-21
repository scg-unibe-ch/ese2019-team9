import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

import {AuthService} from '../../services/authService/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
  ) { }

  ngOnInit() {

    this.forgotPasswordForm = this.formBuilder.group( {
      email: ['', [ Validators.required, Validators.email]]
    });
  }

  // getter for easy access to form fields
  get form() { return this.forgotPasswordForm.controls; }

  onSubmitGetPassword() {

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }



  }

}
