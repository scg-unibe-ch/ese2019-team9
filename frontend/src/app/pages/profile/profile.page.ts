import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../core/services/notificationService/notification.service';
import {AuthService} from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  selectedTab;
  notifications = [];

  constructor(
      private notificationService: NotificationService,
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.selectedTab = 0;
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getSingleUsersNotifications().subscribe(
        data => {
          // @ts-ignore
          this.notifications = data;
          console.log(this.notifications);
        }, err => {
          console.log(err);
        }
    );
  }

  onTabSwitch(evt: CustomEvent) {
    const id = parseInt(evt.detail.value, 10);
    this.selectedTab = id;
  }

}
