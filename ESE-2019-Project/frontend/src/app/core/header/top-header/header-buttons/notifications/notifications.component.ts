import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { NotificationService } from '../../../../services/notificationService/notification.service';
import { ProgressIndicatorService } from '../../../../services/progressIndicatorService/progress-indicator.service';
import {NavParams, PopoverController} from '@ionic/angular';
import {FilterAndSearchService} from '../../../../services/filterAndSearchService/filter-and-search.service';

/**
 * A component to display notifications. Used as a popover component
 */
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
    /**
     * A variable in which the notifications are stored
     */
    notifications = this.navParams.get('notifications');

    /**
     * Assigns multiple new private variables
     * @param notificationService Auto injected NotificationService, which handles the fetching of the notifications from the backend
     * @param progressIndicatorService Auto injected ProgressIndicatorService used for displaying toasts
     * @param sortService Auto injected FilterAndSearchService used for sorting the notifications
     * @param popoverController Auto injected PopoverController used for dismissing the popover
     * @param navParams Auto injected NavParams used for getting the notifications
     */
    constructor(
        private notificationService: NotificationService,
        private progressIndicatorService: ProgressIndicatorService,
        private sortService: FilterAndSearchService,
        private popoverController: PopoverController,
        private navParams: NavParams) {
    }

    /**
     * Sorts the notifications and assings the first 10 to the local {@link #notifications} variable.
     */
    ngOnInit() {
        this.notifications = this.sortService.sort(this.navParams.get('notifications'), '+read', '+date').slice(0, 10);
    }

    /**
     * As soon as the popover is dismissed, sets the notifications to read
     */
    ngOnDestroy(): void {
        this.setNotificationsToRead();
    }

    /**
     * Fetches all Notifications from the backend and sorts them by read status and date
     */
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

    /**
     * Deletes a given notification by id
     * @param notificationId the Id of the notification by id
     */
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

    /**
     * Sets all notifications as 'read'
     */
    setNotificationsToRead() {
        this.notificationService.setAllNotificationsToRead().subscribe(err => {
            console.log(err);
        });
    }

    /**
     * Dismisses the popover
     */
    async dismissPopover() {
        await this.popoverController.dismiss();
    }
}
