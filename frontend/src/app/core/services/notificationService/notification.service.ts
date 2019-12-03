import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../authService/auth.service';
import {Observable, observable, Subject, timer} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    source;
    subject = new Subject();

    notificationEndpoint = 'https://moln-api.herokuapp.com/notification';

    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private authService: AuthService
    ) {}

    getSingleUsersNotifications() {
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
      return this.httpClient.get(this.notificationEndpoint + '/user', {headers});
    }

    notifySingleUser(userId: string, body: string) {
        body = JSON.parse(body);
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.post(this.notificationEndpoint + `/${userId}`, body, {headers});
    }

    deleteNotification(notificationId: string) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.notificationEndpoint + `/${notificationId}`, {headers});
    }

    setAllNotificationsToRead() {
      const body = '';
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
      return this.httpClient.patch(this.notificationEndpoint + '/user', body, {headers});
    }

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
