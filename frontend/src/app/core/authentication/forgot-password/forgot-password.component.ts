import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from '../../services/authService/auth.service';
/**
 * Forgot Password Component. Used by users to reset the password.
 * Component contains a form with an input field for the email and a button.
 * Uses {@link AuthService} to send the reset-request to the backend
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  /**
   * The Input Form.
   */
  forgotPasswordForm: FormGroup;

  /**
   * Message object with strings that appear when the input isn't of the correct form. 
   */
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Not a valid address' }
    ]
  };

  /**
   * Variable that is set to `true` when the backend return the reset email was sent to the user
   */
  forgotEmailSent = false;
  /**
   * Variable that is set to `true` when the backend request was returned with the error code `500`. Variable is set to show an unsuccessful reset request of the backend.
   */
  messageReceived = false;

  /**
   * The errorMessage that gets displayed to the user
   */
  errorMessage;

  /**
   * Assigns two new private variables `formBuilder` and `authService`
   * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
   * @param authService auto injected `AuthService` to handle the backend communication
   */
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
  ) { }

  /**
   *  Groups the Form and assigns it to {@link #forgotPasswordForm}
   */
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group( {
      email: ['', [ Validators.required, Validators.email]]
    });
  }

  /**
   * Checks if the form is valid. If it's a valid form makes a backend request with {@link AuthService} and then resets the form.
   * 
   * If status from backend request is ok (`200`) the variable `forgotEmailSent`is set to `true`.
   * If the returned status is `500` a message is displayed.
   */
  onSubmitGetPassword() {
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    const val = this.forgotPasswordForm.value;
    this.authService.forgotPassword(val.email)
        .subscribe(data => {
          if (data.status === 200 ) {
            this.forgotPasswordForm.reset();
            this.forgotEmailSent = true;
        }
            }, error => {
          if (error.status === 500) {
            this.messageReceived = true;
            this.forgotPasswordForm.reset();
            this.errorMessage = 'Have you entered the correct address?';
          }else {
            this.messageReceived = true;
            this.forgotPasswordForm.reset();
            this.errorMessage = error;
          }
        });
  }
}
