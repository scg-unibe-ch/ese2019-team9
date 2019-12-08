import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../authService/auth.service';
import {Subject} from 'rxjs';

/**
 * The notification Service handling
 *  - fetching the notifications
 *  - deleting the notifications
 *  - setting the notifications to read
 */
@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    /**
     * The interval of fetching notifications
     */
    source;

    /**
     * The Subject where new notifications are emitted
     */
    subject = new Subject();

    /**
     * The base Url of the notifications backend
     */
    notificationEndpoint = 'https://moln-api.herokuapp.com/notification';

    /**
     * Assings two new private variables
     * @param httpClient Auto injected HttpClient used for making the backend calls
     * @param authService Auto injected authService used for retrieving the token which is used as authentication on the backend
     */
    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {}

    /**
     * Retrieves the Notifications of the currently logged in user
     * @returns an observable with the notifications
     */
    getSingleUsersNotifications() {
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
      return this.httpClient.get(this.notificationEndpoint + '/user', {headers});
    }

    /**
     * Creates a new Notification for a user
     * @param userId the userId of the receiving user
     * @param body the message body
     * @returns an observable with the server response
     */
    notifySingleUser(userId: string, body: string) {
        body = JSON.parse(body);
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.post(this.notificationEndpoint + `/${userId}`, body, {headers});
    }

    /**
     * Deletes a notification by id
     * @param notificationId the id  of the notification
     * @returns an observable with the server response
     */
    deleteNotification(notificationId: string) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.notificationEndpoint + `/${notificationId}`, {headers});
    }

    /**
     * Sets all notifications as read on the backend
     * @returns an observable with the server response
     */
    setAllNotificationsToRead() {
      const body = '';
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
      return this.httpClient.patch(this.notificationEndpoint + '/user', body, {headers});
    }

    /**
     * Returns a subject which emits fetched notifications every 3 seconds.
     * Initializes the interval only once if the {@link #source interval} is not the defined yet
     * @returns the Subject where you can subscribe to
     */
    checkForNewNotifications(): Subject<any> {
        if (!this.source) {
            this.source = setInterval(() => {
                this.getSingleUsersNotifications().subscribe(
                    data => {
                       this.subject.next(data);
                    }, err => {
                        console.log(err);
                    }
                );
            }, 3000);
        }
        return this.subject;
    }
}
