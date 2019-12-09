import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

/**
 * The user service, which handles
 *  - fetching users
 *  - deleting users
 *  - updating users
 *  - checking if user is a seller
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
 /**
  * Assings two new private variables
  * @param httpClient Auto injected HttpClient used for making the backend calls
  * @param authService Auto injected authService used for retrieving the token which is used as authentication on the backend
  */
  constructor(
      private httpClient: HttpClient,
      private authService: AuthService) { }

  /**
   * The base Url of the user endpoint
   */
  userEndpoint = 'https://moln-api.herokuapp.com/user';

  /**
   * Fetches all users from the backend
   * @returns an observable with the server response
   */
  getAllUsers(): Observable<[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get<[]>(this.userEndpoint, {headers});
  }

  /**
   * Deletes a given user
   * @param id the id of the user to be deleted
   * @returns an observable with the server response
   */
  deleteUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.delete(this.userEndpoint + `/${id}`, {headers});
  }

  /**
   * Updates a given user
   * @param id the id of the user to be updated
   * @param body a string of key value pairs of updated fields
   * @param img a new image
   * @returns an observable with the server response
   */
  updateUser(id: string, body: string, img: any) {
    body = JSON.parse(body);
    const formData = new FormData();
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    Object.keys(body).forEach(key => {
      formData.append(key, body[key]);
    });
    if (img) {
      formData.append('image', img);
    }
    console.log(formData);
    return this.httpClient.patch(this.userEndpoint + `/${id}`, formData, {headers});
  }

  /**
   * Fetches information of a given user
   * @param id the id of the user
   * @returns an observable with the server response
   */
  getSingleUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get(this.userEndpoint + `/${id}`, {headers});
  }
  
  /**
   * Checks whether the logged in user is a seller
   * @returns a Promis which resolves with the variable whether the currently logged in user is a seller
   */
  isSeller(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      if (!this.authService.isLoggedIn()) {return false;}
      const id = this.authService.getId();
      this.getSingleUser(id).subscribe((data) => {
        if ((data as any).address && (data as any).address.length > 0 && (data as any).country 
        && (data as any).country.length > 0 && (data as any).name && (data as any).name.length > 0){
          resolve(true);
        }
        resolve(false);
      },
      error => {
        console.log(error);
        reject(error);
      });
    });
  }
}
