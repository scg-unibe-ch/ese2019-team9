import {Component, Host, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

import {LoginComponent} from '../../../authentication/login/login.component';
import {RegistrationComponent} from '../../../authentication/registration/registration.component';
import {ProfilePopoverComponent} from './profile-popover/profile-popover.component';
import {AuthService} from 'src/app/core/services/authService/auth.service';
import {NotificationService} from '../../../services/notificationService/notification.service';
import {NotificationsComponent} from 'src/app/core/header/top-header/header-buttons/notifications/notifications.component';

/**
 * Component containing the Buttons in the upper right corner.
 * Contains:
 *  - `Login` Button
 *  - `Join` Button to register
 *  - `Admin` Button to get to the admin realm
 *  - `Logout` Button
 *  - `Profile` Button to get to the profile page
 */
@Component({
    selector: 'app-header-buttons',
    templateUrl: './header-buttons.component.html',
    styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent implements OnInit {
    /**
     * Number of unread Notifications
     */
    unreadCount = 0;

    /**
     * The Array of notifications
     */
    notifications = [];

    /**
     * Assign new private variables `popoverController` and `authService`
     * @param popoverController Auto injected Popovercontroller
     * @param authService Auto injected AuthService
     */
    constructor(
        private popoverController: PopoverController,
        private authService: AuthService,
        private notificationService: NotificationService) {
    }

    /**
     * If the user is logged in checks for new Notifications
     */
    ngOnInit() {
        if (this.authService.isLoggedIn())
            this.checkForNewNotifications();
    }

    /**
     * Checks for new Notifications
     */
    checkForNewNotifications() {
        this.notificationService.getSingleUsersNotifications().subscribe(
            data => {
                this.unreadCount = (data as any).unread;
                this.notifications = (data as any).notifications;
            }
        );
    }

    /**
     * Creates and displays a Popover via the `PopoverController`
     * with the {@link LoginComponent} as the component.
     * When dismissed with the {@link LoginComponent.html#presentRegistrationPopover presentRegistrationPopover method} dismisses the
     * current {@link LoginComponent} popover and opens the `registration Popover` via {@link #presentRegistrationPopover}
     */
    async presentLoginPopover() {
        const popover = await this.popoverController.create({
            component: LoginComponent,
            translucent: true,
            backdropDismiss: true,
            cssClass: 'popover-style'
        });
        popover.onDidDismiss().then((data) => {
            if (data.data === 'openRegistration') {
                this.presentRegistrationPopover();
            }
        });
        return await popover.present();
    }

    /**
     * Creates and displays a Popover via the `PopoverController`
     * with the {@link RegistrationComponent} as the component.
     * When dismissed with the {@link RegistrationComponent.html#presentLoginPopover presentLoginPopover method} dismisses the
     * current {@link RegistrationComponent} popover and opens the `Login Popover` via {@link #presentLoginPopover}
     */
    async presentRegistrationPopover() {
        const popover = await this.popoverController.create({
            component: RegistrationComponent,
            translucent: true,
            backdropDismiss: true,
            cssClass: 'popover-style'
        });
        popover.onDidDismiss().then((data) => {
            if (data.data === 'openLogin') {
                this.presentLoginPopover();
            }
        });
        return await popover.present();
    }

    /**
     * Shows the profile Popover {@link ProfilePopoverComponent}
     * @param ev the event object
     */
    async showProfilePopover(ev: any) {
        const popover = await this.popoverController.create({
            component: ProfilePopoverComponent,
            event: ev,
            backdropDismiss: true,
            cssClass: 'profile-popover'
        });
        return await popover.present();
    }

    /**
     * Shows the Notification Popover {@link NotificationsComponent}
     * @param ev the event object
     */
    async showNotificationsPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: NotificationsComponent,
            componentProps: {notifications: this.notifications},
            event: ev,
            cssClass: 'notifications-popover'
        });
        popover.onDidDismiss().then(() => {
            this.checkForNewNotifications();
        });
        return await popover.present();
    }
}
