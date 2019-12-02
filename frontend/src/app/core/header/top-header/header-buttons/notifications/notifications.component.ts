import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { NotificationService } from '../../../../services/notificationService/notification.service';
import { ProgressIndicatorService } from '../../../../services/progressIndicatorService/progress-indicator.service';
import {NavParams, PopoverController} from '@ionic/angular';
import {FilterAndSearchService} from '../../../../services/filterAndSearchService/filter-and-search.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
    notifications = this.navParams.get('notifications');

    constructor(
        private notificationService: NotificationService,
        private progressIndicatorService: ProgressIndicatorService,
        private sortService: FilterAndSearchService,
        private popoverController: PopoverController,
        private navParams: NavParams) {
    }

    ngOnInit() {
        this.notifications = this.sortService.sort(this.navParams.get('notifications'), '+read', '+date').slice(0, 10);
        console.log(this.notifications);
    }

    ngOnDestroy(): void {
        this.setNotificationsToRead();
    }

    getNotifications() {
        this.notificationService.getSingleUsersNotifications().subscribe(
            data => {
                // @ts-ignore
                this.notifications = this.sortService.sort(data.notifications, '+read', '+date');
            }, err => {
                console.log(err);
            }
        );
    }

    deleteNotification(notificationId: string) {
        this.notificationService.deleteNotification(notificationId).subscribe(
            data => {
                this.getNotifications();
            }, err => {
                this.progressIndicatorService.presentToast('Notification not deleted', 'danger');
                console.log(err);
            }
        );
    }

    setNotificationsToRead() {
        this.notificationService.setAllNotificationsToRead().subscribe(err => {
            console.log(err);
        });
    }

    async dismissPopover() {
        await this.popoverController.dismiss();
    }
}
