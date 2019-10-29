import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from '../../services/authService/auth.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Not a valid address' }
    ]
  };
  forgotEmailSent = false;
  messageReceived = false;
  message;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
  ) { }

  ngOnInit() {

    this.forgotPasswordForm = this.formBuilder.group( {
      email: ['', [ Validators.required, Validators.email]]
    });
  }

  onSubmitGetPassword() {

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    const val = this.forgotPasswordForm.value;
    this.authService.forgotPassword(val.email)
        .pipe(first())
        .subscribe(data => {
          if (data.status === 200 ) {
            this.forgotPasswordForm.reset();
            this.forgotEmailSent = true;
        }
            }, error => {
          if (error.status === 500) {
            this.forgotPasswordForm.reset();
            this.message = error.error.message;
          }
        });
  }
}
