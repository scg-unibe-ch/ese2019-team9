import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
      private httpClient: HttpClient,
      private router: Router
  ) { }

  getCategoriesEndpoint = 'https://moln-api.herokuapp.com/category';

  getCategories() {
   return this.httpClient.get(this.getCategoriesEndpoint)
       .pipe(map(res => {
         return res;
       }));
  }
}
