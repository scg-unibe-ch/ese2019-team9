import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
      private httpClient: HttpClient,
      private authService: AuthService
  ) { }

  productsEndpoint = 'https://moln-api.herokuapp.com/product';

  getAllProducts(): Observable<[]> {
   return this.httpClient.get<[]>(this.productsEndpoint)
       .pipe(map(res => {
         return res;
       }));
  }

  addNewProduct(name: string, category: string, price: number) {
    return this.httpClient.post(this.productsEndpoint+'/add', {name, category, price})
       .pipe(map(res => {
         return res;
       }));
  }

  deleteProduct(productId: string){
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.delete(this.productsEndpoint+`/${productId}`, {headers: headers})
       .pipe(map(res => {
         return res;
       }));
  }

  verifyProduct(productId: string){
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.productsEndpoint+`/${productId}`, {verified: true}, {headers: headers})
    .pipe(map(res => {
      return res;
    }))
  }
}
