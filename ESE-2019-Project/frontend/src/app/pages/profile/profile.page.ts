import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/userService/user.service';
import {AuthService} from '../../core/services/authService/auth.service';
import {ProgressIndicatorService} from '../../core/services/progressIndicatorService/progress-indicator.service';

/**
 * The page for displaying the profile informations.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  /**
   * The id of the user
   */
  userId;
  /**
   * The user object
   */
  user;
  /**
   * All Keys that should be available on the user
   */
  keys = ['_id', 'email', 'address', 'name', 'website', 'country', 'phone', 'sex'];
  /**
   * All values to be hidden
   */
  valuesToHide = ['password', 'openDetail', 'admin', '_id', 'verifiedEmail', 'image', 'productsSold'];
  /**
   * Values to be show as non-changeable only
   */
  additionalValues = ['verifiedEmail', 'productsSold'];

  /**
   * @ignore
   */
  constructor(
      private userService: UserService,
      private authService: AuthService,
      private progressIndicatorService: ProgressIndicatorService
  ) { }

  /**
   * Fetches the user information
   */
  ngOnInit() {
    this.getUserInformation();
  }

  /**
   * Fetches the user information from the backend
   */
  getUserInformation() {
    this.progressIndicatorService.presentLoading('Loading...');
    this.userId = this.authService.getId();
    this.userService.getSingleUser(this.userId).subscribe(data => {
      this.user = data;
      this.populateUser();
      this.progressIndicatorService.dismissLoadingIndicator();
    }, err => {
      console.log(err);
      this.progressIndicatorService.dismissLoadingIndicator();
      this.progressIndicatorService.presentToast('User could not be updated', 'danger', 3000);
    });
  }

  /**
   * Adds all {@link #keys} to the user object if they aren't already there
   */
  populateUser() {
    this.keys.forEach((key) => {
      if (!this.user.hasOwnProperty(key)) {
        this.user[key] = '';
      }
    });
  }
}
