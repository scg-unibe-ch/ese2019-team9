import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  messageReceived = false;
  message;

  constructor(
      private activatedRoute: ActivatedRoute,
      private authService: AuthService) {}


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.authService.verifyUser(queryParams.get('token'))
          .subscribe(response => {
              if (response.status === 200) {
                  this.messageReceived = true;
                  this.message = 'Your email was successfully verified';
              }
          }, error => {
              this.messageReceived = true;
              if (error.status === 500) {
                  this.message = 'Verification not successful!';
              }
          });
    });
  }
}
