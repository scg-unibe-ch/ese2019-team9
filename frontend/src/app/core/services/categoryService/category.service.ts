import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    getCategoriesEndpoint = 'https://moln-api.herokuapp.com/category';

    /*
    Fetch all categories from the backend
    @Return: Array of all categories and their details
     */
    getCategories() {
        return this.httpClient.get(this.getCategoriesEndpoint).pipe(
            map(res => {
                return res;
            })
        );
    }

    /*
    Fetch a single category or subcategory from backend
    @Input: slug of the requested category
    @Return: Array of requested category or subcategory and their details
     */
    getSingleCategoryFromSlug(categorySlug: any) {
        return this.httpClient.get(this.getCategoriesEndpoint + `/${categorySlug}`).pipe(
            map(res => {
                return res;
            })
        );
    }
}
