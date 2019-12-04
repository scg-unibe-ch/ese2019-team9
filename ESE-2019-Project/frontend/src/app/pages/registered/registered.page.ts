import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/authService/auth.service';


@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})
export class RegisteredPage implements OnInit {
  showResentMessage = false;
  showNotResentMessage = false;
  resentMessage;

  constructor(private authService: AuthService) { }

  ngOnInit() {
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
}
