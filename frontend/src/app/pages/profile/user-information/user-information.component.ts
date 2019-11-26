import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/userService/user.service';
import {AuthService} from '../../../core/services/authService/auth.service';
import {ProgressIndicatorService} from '../../../core/services/progressIndicatorService/progress-indicator.service';
import {NotificationService} from '../../../core/services/notificationService/notification.service';
import {FilterAndSearchService} from '../../../core/services/filterAndSearchService/filter-and-search.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit, OnDestroy {
  userId;
  user;
  keys = ['_id', 'email', 'address', 'name', 'website', 'country', 'phone', 'sex'];
  valuesToHide = ['password', 'openDetail', 'admin', '_id', 'verifiedEmail', 'image'];

  notifications = [];

  constructor(
      private userService: UserService,
      private authService: AuthService,
      private progressIndicatorService: ProgressIndicatorService,
      private notificationService: NotificationService,
      private sortService: FilterAndSearchService
  ) { }

  ngOnInit() {
    this.getUserInformation();
    this.getNotifications();
    console.log('entered');
  }

  ngOnDestroy(): void {
    console.log('left');
    this.notificationService.setAllNotificationsToRead().subscribe(err => {
      console.log(err);
    });
  }

  ionViewDidLeave() {
    console.log('will leave');
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

  getNotifications() {
    this.notificationService.getSingleUsersNotifications().subscribe(
        data => {
          // @ts-ignore
          this.notifications = this.sortService.sort(data, '+read', '+date');
          console.log(this.notifications);
        }, err => {
          console.log(err);
        }
    );
  }

  deleteNotification(notificationId: string) {
    this.notificationService.deleteNotification(notificationId).subscribe(
        data => {
          this.progressIndicatorService.presentToast('Notification deleted', 2000);
          this.getNotifications();
        }, err => {
          this.progressIndicatorService.presentToast('Notification not deleted', 2000, 'danger');
          console.log(err);
        }
    );
  }
}
