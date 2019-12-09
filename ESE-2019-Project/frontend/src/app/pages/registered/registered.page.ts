import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/authService/auth.service';

/**
 * The page for users which have registrated but not verified the email
 */
@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})
export class RegisteredPage {
  /**
   * Boolean indicating that the message was resent
   */
  showResentMessage = false;
  /**
   * Boolean indicating that the message was not resent
   */
  showNotResentMessage = false;

  /**
   * Assings a new private variable
   * @param authService Auto injected AuthService to handle backend requests
   */
  constructor(private authService: AuthService) { }

  /**
   * Resends the email and displays if it was successful
   */
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
