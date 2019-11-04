import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PopoverController} from '@ionic/angular';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services/authService/auth.service';
import {PopoverService} from '../../services/popoverService/popover.service';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
      email: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Not a valid address' }
      ],
      password: [
          { type: 'required', message: 'Password is required' },
      ]
  };
  message;
  showResendButton = false;
  showResentMessage = false;
  showNotResentMessage = false;
  messageReceived = false;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private popoverService: PopoverService,
      private popoverController: PopoverController,
      private router: Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      });
  }

  resendEmail() {
      this.authService.resendEmail()
          .subscribe(data => {
              this.showResentMessage = true;
          },
              error => {
              this.showNotResentMessage = true;
          });
  }
  onSubmitLogin() {

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      const val = this.loginForm.value;
      this.authService.login(val.email, val.password)
          .pipe(first())
          .subscribe(
              data => {
                  this.popoverService.dismissPopover();
                  this.loginForm.reset();
              },
              error => {
                  this.messageReceived = true;
                  if (error.status === 401 && error.error.message === 'Authentication failed') {
                      this.message = error.error.message;
                  } else if (error.status === 401 && error.error.message === 'Email not verified') {
                      this.showResendButton = true;
                      this.message = error.error.message;
                  } else {
                      this.message = 'Login failed';
                  }
              }
          );
  }

  async presentForgotPopover(evt) {
      evt.preventDefault();
      this.popoverService.dismissPopover();
      const popover = await this.popoverController.create({
          component: ForgotPasswordComponent,
          translucent: true,
          backdropDismiss: true,
          cssClass: 'popover-style'
      });
      return await popover.present();
  }
}
