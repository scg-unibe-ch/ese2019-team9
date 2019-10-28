import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  resetForm: FormGroup;
  validationMessages = {
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must contain 6 characters' }
    ]
  };
  messageReceived = false;
  isErrorMessage = false;
  message;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group( {
      password: ['', [ Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitReset() {

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    const val = this.resetForm.value;
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.authService.resetPassword(queryParams.get('token'), val.password)
          .subscribe(data => {
            if (data.status === 200 ) {
              this.message = data.statusText;
            }
          }, error => {
            this.isErrorMessage = true;
            if (error.status === 500 && error.error.message === 'token invalid') {
              this.message = 'Invalid request';
            } else {
              this.message = error.error.message;
            }
          });
    });
  }
}
