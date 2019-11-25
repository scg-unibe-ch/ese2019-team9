import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationEndpoint = 'https://moln-api.herokuapp.com/notification/user'

  constructor(
      private httpClient: HttpClient,
      private router: Router,
      private authService: AuthService
  ) { }

  getSingleUsersNotifications() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get(this.notificationEndpoint, {headers});
  }

  notifySingleUser(userId: string, body: string) {
    body = JSON.parse(body);
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    console.log(body);
    return this.httpClient.post(this.notificationEndpoint, body, {headers});
  }


}
