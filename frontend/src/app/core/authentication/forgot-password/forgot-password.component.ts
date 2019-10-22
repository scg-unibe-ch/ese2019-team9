import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from '../../services/authService/auth.service';

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
    /*
    Insert code that handles API request, once backend implemented their side of the request.
     */
  }

}
