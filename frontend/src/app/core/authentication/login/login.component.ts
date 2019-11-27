import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PopoverController} from '@ionic/angular';

import { AuthService } from '../../services/authService/auth.service';
import {PopoverService} from '../../services/popoverService/popover.service';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

/**
 * Login Component.
 * 
 * Displays a login form containing an input field for the email and an input field for the password.
 * When submitted, tries to log in with the {@link AuthService} and if successful dismisses the popover. If it wasn't successful displays an error message.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    /**
     * `loginForm` is the FormGroup with the inputs and validators.
     */
  loginForm: FormGroup;
  /**
   * Message object with strings that appear when the input isn't of the correct form. 
   */
  validationMessages = {
      email: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Not a valid address' }
      ],
      password: [
          { type: 'required', message: 'Password is required' },
      ]
  };
  /**
   * Error message that gets displayed if the backend returns an error code
   */
  errorMessage;

  /**
   * Set to `true` to display the button `resend email` for the email verification
   */
  showResendButton = false;
  /**
   * `showResentMessage` only has an impact if {@link #errorMessage} has a value.
   * 
   * Set to `true` to display the message that the verification email was resent.
   * 
   * Set to `false` to display the message that there was an error resending the verification email
   */
  showResentMessage = false;
/**
 * Assigns four new variables `formBuilder`, `authService`, `popoverService` and `popoverController`
 * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
 * @param authService auto injected `authService` to handle the backend login communication
 * @param popoverService auto injected `popoverService` to handle the dismission of popovers
 * @param popoverController auto injected `popoverController` to handle the creation of a new popover with the `ForgotPasswordComponent`
 */
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private popoverService: PopoverService,
      private popoverController: PopoverController,
      private router: Router) { }

      /**
       * Groups the email and password input fields with their Validators and assigns it to {@link #loginForm}
       */
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      });
  }

  /**
   * Calls the {@link AuthService} to resend the verification email. If successul sets the {@link #showResentMessage} to `true` to display the message, that the email was sent.
   * If it wasn't succesful sets the {@link #showResentMessage} to `false` to display the message that the email wasn't sent.
   */
  resendEmail() {
      this.authService.resendEmail()
          .subscribe(data => {
              this.showResentMessage = true;
          },
              error => {
              this.showResentMessage = false;
          });
  }

  /**
   * If the form is valid, sends a login request to the backend via the {@link AuthService}. 
   * If the login was successful dismisses the popover containing this component.
   * Else sets the {@link #errorMessage} to the returned error (for http status code 401) or to `Login failed!` for other error status codes.
   */
  onSubmitLogin() {
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      const val = this.loginForm.value;
      this.authService.login(val.email, val.password)
          .subscribe(
              data => {
                  this.popoverService.dismissPopover();
                  this.loginForm.reset();
                  this.router.navigate(['/home']);
              },
              error => {
                  if (error.status === 401 && error.error.message === 'Authentication failed') {
                      this.errorMessage = error.error.message;
                  } else if (error.status === 401 && error.error.message === 'Email not verified') {
                      this.showResendButton = true;
                      this.errorMessage = error.error.message;
                  } else {
                      this.errorMessage = 'Login failed';
                  }
              }
          );
  }

  /**
   * Creates and presents a popover containing the {@link ForgotPasswordComponent}
   * @param evt the event with which the method was called
   */
  async presentForgotPopover(evt) {
      this.popoverService.dismissPopover();
      const popover = await this.popoverController.create({
          component: ForgotPasswordComponent,
          translucent: true,
          backdropDismiss: true,
          cssClass: 'popover-style'
      });
      return await popover.present();
  }

  /**
   * Dismisses the popover with data set to `openRegistration`  
   */
  presentRegistrationPopover() {
    this.popoverController.dismiss('openRegistration');
  }
}
