import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  userEndpoint = 'https://moln-api.herokuapp.com/user';

  getAllUsers(): Observable<[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get<[]>(this.userEndpoint, {headers: headers});
  }

  deleteUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.delete(this.userEndpoint+`/${id}`, {headers: headers});
  }

  updateUser(id: string, body: string, img: any) {
    const formData = new FormData();
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    Object.keys(body).forEach(key => {
      formData.append(key, body[key]);
    });
    if(img)
      formData.append('image', img);
    return this.httpClient.patch(this.userEndpoint +`/${id}`, formData, {headers});
  }

  getSingleUser(id) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get(this.userEndpoint+`/${id}`, {headers: headers});
  }
  
  isSeller(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=> {
      if (!this.authService.isLoggedIn()) {return false;}
      const id = this.authService.getId();
      this.getSingleUser(id).subscribe((data)=> {
        if ((data as any).address && (data as any).address.length > 0 && (data as any).country 
        && (data as any).country.length > 0 && (data as any).name && (data as any).name.length > 0){
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
