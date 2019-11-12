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
   return this.httpClient.get<[]>(this.productsEndpoint);
  }

  getProductsById(id: string) {
      let products = [];
      return new Promise((resolve, reject) => {
          this.getAllProducts().subscribe(data => {
              // filter allProducts so only the verified products of the respective category are presented
              // @ts-ignore
              products = data.filter(prod => prod.category._id === id).filter(prod => prod.verified);
              resolve(products);
          },
              error => {
              reject(error);
              });
      });
  }

  addNewProduct(name: string, category: string, price: number) {
    return this.httpClient.post(this.productsEndpoint + '/add', {name, category, price})
       .pipe(map(res => {
         return res;
       }));
  }

  deleteProduct(productId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.delete(this.productsEndpoint+`/${productId}`, {headers: headers});
  }

  verifyProduct(productId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.productsEndpoint+`/${productId}`, {verified: true}, {headers: headers});
  }

  uploadImage(image: File) {
      const uploadData = new FormData();
      uploadData.append('image', image);
      return this.http.post<{imageUrl: string, imagePath: string}>('https://', uploadData);
  }
}
