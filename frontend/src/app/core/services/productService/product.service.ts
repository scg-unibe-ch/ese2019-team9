import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
      private httpClient: HttpClient,
      private router: Router
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
    return this.httpClient.delete(this.productsEndpoint+`/${productId}`)
       .pipe(map(res => {
         return res;
       }));
  }

  verifyProduct(productId: string){
    return this.httpClient.patch(this.productsEndpoint+`/${productId}`, {verified: true})
    .pipe(map(res => {
      return res;
    }))
  }
}
