import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';
import { Router } from '@angular/router';

import {AuthService} from '../../services/authService/auth.service';
import {PopoverService} from '../../services/popoverService/popover.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Not a valid address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must contain 6 characters' }
    ]
  };
  message;
  messageReceived = false;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private popoverService: PopoverService,
      private router: Router) { }

  ngOnInit() {

    this.registrationForm = this.formBuilder.group( {
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitRegistration() {

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }
    const val = this.registrationForm.value;
    this.authService.register(val.email, val.password)
        .pipe(first())
        .subscribe(
            data => {
              this.messageReceived = true;
              this.registrationForm.reset();
              this.popoverService.dismissPopover();
              this.router.navigate(['/registered']);
            },
            error => {
              this.messageReceived = true;
              this.registrationForm.reset();
              if (error.status === 409) {
                this.message = error.error.message;
              } else {
                this.message = 'Registration failed';
              }
            }
        );
  }
}
