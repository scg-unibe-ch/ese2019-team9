import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../core/services/authService/auth.service';

/**
 * The page to display after the user clicked on the verification button in the email
 */
@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  /**
   * A boolean indicating whether the message from the backend was received
   */
  messageReceived = false;
  /**
   * The message to display
   */
  message;

  /**
   * @ignore
   */
  constructor(
      private activatedRoute: ActivatedRoute,
      private authService: AuthService) {}


  /**
   * Tries to verify the email based on the token in the query Parameters. Displays a message if the verification was successful
   */
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
