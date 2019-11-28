import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notificationService/notification.service';
import { ProgressIndicatorService } from '../services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(
    private notificationService : NotificationService,
    private progressIndicatorService : ProgressIndicatorService) { }

  notifications = [];

  ngOnInit() {}

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
          this.progressIndicatorService.presentToast('Notification deleted', 3500);
          this.getNotifications();
        }, err => {
          this.progressIndicatorService.presentToast('Notification not deleted', 3500, 'danger');
          console.log(err);
        }
    );
  }

}
