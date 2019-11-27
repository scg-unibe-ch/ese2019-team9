import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  productsEndpoint = 'https://moln-api.herokuapp.com/user';

  getAllUsers(): Observable<[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get<[]>(this.productsEndpoint, {headers: headers});
  }

  deleteUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.delete(this.productsEndpoint+`/${id}`, {headers: headers});
  }

  updateUser(id: string, body: string) {
    body = JSON.parse(body);
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.productsEndpoint +`/${id}`, body, {headers: headers});
  }

  getSingleUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get(this.productsEndpoint+`/${id}`, {headers: headers});
  }
  
  isSeller(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=> {
      if (!this.authService.isLoggedIn()) {return false;}
      const id = this.authService.getId();
      this.getSingleUser(id).subscribe((data)=> {
        if (data.address && data.address.length > 0 && data.country && data.country.length > 0 && data.name && data.name.length > 0){
          resolve(true);
        }
        resolve(false);
      },
      error=> {
        console.log(error);
        reject(error);
      });
    });
    
  }
}
