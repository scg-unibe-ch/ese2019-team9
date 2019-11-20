import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../core/services/userService/user.service';
import {AuthService} from '../../../core/services/authService/auth.service';
import {ProgressIndicatorService} from '../../../core/services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  userId;
  user;
  keys = ['_id', 'email', 'address', 'name', 'website', 'country', 'phone', 'sex'];
  valuesToHide = ['password', 'openDetail', 'admin', '_id', 'verifiedEmail', 'image'];

  constructor(
      private userService: UserService,
      private authService: AuthService,
      private progressIndicatorService: ProgressIndicatorService
  ) { }

  ngOnInit() {
    this.getUserInformation();
  }

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
      this.progressIndicatorService.presentToast('User could not be updated', 2000, 'danger');
    });
  }

  populateUser() {
    this.keys.forEach((key) => {
      if (!this.user.hasOwnProperty(key)) {
        this.user[key] = '';
      }
    });
  }
}
