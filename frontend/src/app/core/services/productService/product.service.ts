import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    map
} from 'rxjs/operators';
import {
    AuthService
} from '../authService/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {
    }

    productsEndpoint = 'https://moln-api.herokuapp.com/product';
    reviewEndpoint = 'https://moln-api.herokuapp.com/review';


    getAllProducts() {
        const headers = this.createHeader();
        return this.httpClient.get(this.productsEndpoint, {headers});
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

    getSingleProduct(productId: any) {
        const headers = this.createHeader();
        return this.httpClient.get(this.productsEndpoint + `/${productId}`, {headers});
    }

    addNewProduct(name: string, category: string, price: number) {
        return this.httpClient.post(this.productsEndpoint + '/add', {
            name,
            category,
            price
        });
    }

    deleteProduct(productId: string) {
        const headers = this.createHeader();
        return this.httpClient.delete(this.productsEndpoint + `/${productId}`, {headers});
    }

    updateProduct(productId: string, body: string, img: any) {
        const headers = this.createHeader();
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        const formData = this.createFormData(body, img);
        return this.httpClient.patch(this.productsEndpoint + `/${productId}`, formData, {headers});
    }

    verifyProduct(productId: string) {
        const headers = this.createHeader();
        return this.httpClient.patch(this.productsEndpoint + `/${productId}`, {
            verified: true
        }, {
            headers
        });
    }

    reviseProduct(productId: string) {
        const headers = this.createHeader();
        return this.httpClient.patch(this.productsEndpoint + `/${productId}`, {
            toRevise: true
        }, {
            headers
        });
    }

    addProduct(val: any, img: any) {
        const formData = this.createFormData(val, img);
        const headers = this.createHeader();
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        return this.httpClient.post(this.productsEndpoint, formData, {headers});
    }

    getProductsByUserId(userId: string) {
        const headers = this.createHeader();
        return this.httpClient.get <[]>(this.productsEndpoint + `/user/${userId}`, {
            headers
        });
    }

    addReview(body: any) {
        const headers = this.createHeader();
        return this.httpClient.post(this.reviewEndpoint + '/add', body, {
            headers
        });
    }

    hasBought(productId: string) {
        const headers = this.createHeader();
        return this.httpClient.get(this.productsEndpoint + '/hasBought/' + `${productId}`, {headers});
    }

    // helper functions to create formData and header

    createFormData(body: string, img: any) {
        const formData = new FormData();
        Object.keys(body).forEach(key => {
            formData.append(key, body[key]);
        });
        formData.append('image', img);
        return formData;
    }

    createHeader() {
        const token = this.authService.getToken();
        return new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    }
}