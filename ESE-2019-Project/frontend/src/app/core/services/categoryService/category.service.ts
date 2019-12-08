import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

/**
 * Category service which handles
 *  - fetching of all categories
 *  - fetching a single category with details
 *  - adding a category
 *  - updating a category
 *  - deleting a category
 */
@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    /**
     * Assings two new variables `httpClient` and `authService`
     * @param httpClient Auto injected HttpClient for the backendrequests
     * @param authService  Auto injected AuthService used for retrieving the token, used in some backendcalls for authentication
     */
    constructor(private httpClient: HttpClient, private authService: AuthService) {}

    /**
     * The base URL of the categories endpoint
     */
    categoriesEndpoint = 'https://moln-api.herokuapp.com/category';

    /**
     * Fetches all the Categories from the backend
     * @returns an array of Categories in an observable
     */
    getCategories() {
        return this.httpClient.get<Category[]>(this.categoriesEndpoint);
    }

    /** 
     * Fetch a single category or subcategory from backend
     * @param slug of the requested category
     * @returns an Array of the requested category or subcategory and their details in an observable
     */
    getSingleCategoryFromSlug(categorySlug: any) {
        return this.httpClient.get(this.categoriesEndpoint + `/${categorySlug}`);
    }

    /**
     * Creates a new category
     * @param category a category of type Category
     * @param image the image of the category
     * @returns the respond of the server in an observable
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
        return this.httpClient.post(this.categoriesEndpoint + `/add`, formData ,{headers});

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
        if (image) formData.append('image', image);
        return this.httpClient.patch(this.categoriesEndpoint + `/${id}`, formData ,{headers});

    }

    /**
     * Deletes the category with the given Id
     * @param categoryId the Id of the category to delete
     * @return an Observable of the server response
     */
    deleteCategory(categoryId: string){
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.delete(this.categoriesEndpoint + `/${categoryId}`, {headers});
    }
}
