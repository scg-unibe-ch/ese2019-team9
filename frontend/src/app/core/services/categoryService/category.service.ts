import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService) {}

    categoriesEndpoint = 'https://moln-api.herokuapp.com/category';

    /*
    Fetch all categories from the backend
    @Return: Array of all categories and their details
     */
    getCategories() {
        return this.httpClient.get<Category[]>(this.categoriesEndpoint);
    }

    /*
    Fetch a single category or subcategory from backend
    @Input: slug of the requested category
    @Return: Array of requested category or subcategory and their details
     */
    getSingleCategoryFromSlug(categorySlug: any) {
        return this.httpClient.get(this.categoriesEndpoint + `/${categorySlug}`);
    }

    /**
     * Create a new category
     * @param category a category of type {@link Category}
     */
    addCategory(category: Category, image: any){
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        const formData = new FormData();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        const categoryAsJSON = category.toJSON();
        Object.keys(categoryAsJSON).forEach(key => {
        formData.append(key, categoryAsJSON[key]);
        });
        formData.append('image', image);
        return this.httpClient.post(this.categoriesEndpoint + `/add`, formData ,{headers: headers});

    }

    /**
     * Update a category
     * @param id the id of the category
     * @param body the body to be sent
     * @return an Observable of the server response
     */
    updateCategory(id: string, body: string, image?: any): Observable<any>{
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        const formData = new FormData();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        const jsonBody = JSON.parse(body);
        Object.keys(jsonBody).forEach(key => {
            formData.append(key, jsonBody[key]);
        });
        console.log(jsonBody);
        if (image) formData.append('image', image);
        return this.httpClient.patch(this.categoriesEndpoint + `/${id}`, formData ,{headers: headers});

    }

    deleteCategory(categoryId: string){
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.categoriesEndpoint + `/${categoryId}` , {headers});
    }
}
