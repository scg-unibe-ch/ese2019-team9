import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../auth.service';

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
          .subscribe(res => {
            this.messageReceived = true;
            this.message = res;
          });
    });
  }
}
