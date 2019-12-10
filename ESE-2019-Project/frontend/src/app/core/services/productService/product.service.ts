import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../authService/auth.service';

/**
 * Products service, which handles
 *  - fetching of the products 
 *  - deleting products
 *  - updating products
 *  - adding products
 *  - adding reviews 
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * Assings two new private variables
   * @param httpClient Auto injected HttpClient used for making the backend calls
   * @param authService Auto injected authService used for retrieving the token which is used as authentication on the backend
   */
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * The base Url of the products endpoint
   */
  productsEndpoint = 'https://moln-api.herokuapp.com/product';

  /**
   * The base Url of the review endpoint
   */
  reviewEndpoint = 'https://moln-api.herokuapp.com/review';

  /**
   * Fetches all products from the backend
   * @returns an observable with the server response
   */
  getAllProducts() {
    const headers = this.createHeader();
    return this.httpClient.get(this.productsEndpoint, { headers });
  }

  /**
   * Fetches products from the backend and filters them according to the given id
   * @param id the id of the product to be loaded
   * @returns an observable with the server response
   */
  getProductsById(id: string) {
    let products = [];
    return new Promise((resolve, reject) => {
      this.getAllProducts().subscribe(
        data => {
          // filter allProducts so only the verified products of the respective category are presented
          products = (data as any)
            .filter(prod => prod.category._id === id)
            .filter(prod => prod.verified);
          resolve(products);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   * Fetches a single product from the backend
   * @param id the id of the product to be loaded
   * @returns an observable with the server response
   */
  getSingleProduct(productId: any) {
    const headers = this.createHeader();
    return this.httpClient.get(this.productsEndpoint + `/${productId}`, {
      headers
    });
  }

  /**
   * Deletes a product with the given id
   * @param id the id of the product to be loaded
   * @returns an observable with the server response
   */
  deleteProduct(productId: string) {
    const headers = this.createHeader();
    return this.httpClient.delete(this.productsEndpoint + `/${productId}`, {
      headers
    });
  }

  /**
   * Updates a product with the given id
   * @param id the id of the product to be updated
   * @param body the body containging key value pairs of the fields to upgrade
   * @param img a new image for the product
   * @returns an observable with the server response
   */
  updateProduct(productId: string, body: any, img: any) {
    const headers = this.createHeader();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    const formData = this.createFormData(body, img);
    return this.httpClient.patch(this.productsEndpoint + `/${productId}`, formData,{ headers });
  }

  /**
   * Sets a product to verified (Admin functionality)
   * @param productId the productId of the product to update
   * @returns an observable with the server response
   */
  verifyProduct(productId: string) {
    const headers = this.createHeader();
    return this.httpClient.patch(
      this.productsEndpoint + `/${productId}`,
      {
        verified: true
      },
      {
        headers
      }
    );
  }

  /**
   * Sets a product to revise status (Admin functionality)
   * @param productId the productId of the product to update
   * @returns an observable with the server response
   */
  reviseProduct(productId: string) {
    const headers = this.createHeader();
    return this.httpClient.patch(
      this.productsEndpoint + `/${productId}`,
      {
        toRevise: true
      },
      {
        headers
      }
    );
  }

  /**
   * Adds a new product
   * @param body the body with the key value pairs for the data
   * @param img an image for the product
   * @returns an observable with the server response
   */
  addProduct(body: any, img: any) {
    const headers = this.createHeader();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    const formData = this.createFormData(body, img);
    return this.httpClient.post(this.productsEndpoint + '/add', formData, {
      headers
    });
  }

  /**
   * Fetches all products from a user
   * @param userId the userId of the user
   * @returns an observable with the server response
   */
  getProductsByUserId(userId: string) {
    const headers = this.createHeader();
    return this.httpClient.get<[]>(this.productsEndpoint + `/user/${userId}`, {
      headers
    });
  }

  /**
   * Adds a new review on a product
   * @param body an object containing a rating and a productId. A comment is optional
   * @returns an observable with the server response
   */
  addReview(body: any) {
    const headers = this.createHeader();
    return this.httpClient.post(this.reviewEndpoint + '/add', body, {
      headers
    });
  }

  /**
   * Checks whether a user has already bought a product
   * @param productId the product on which to check on
   * @returns an observable with the server response
   */
  hasBought(productId: string) {
    const headers = this.createHeader();
    return this.httpClient.get(
      this.productsEndpoint + '/hasBought/' + `${productId}`,
      { headers }
    );
  }

  /**
   * Creates a new FormData Object with all key value pairs of the body and the image
   * @param body The key value pairs
   * @param img the image which gets added on the image field
   * @returns an observable with the server response
   */
  createFormData(body: string, img: any) {
    body = JSON.parse(body);
    const formData = new FormData();
    Object.keys(body).forEach(key => {
      formData.append(key, body[key]);
    });
    if (img) {
      formData.append('image', img);
    }
    return formData;
  }

  /**
   * Creates new HttpHeaders with Authentication
   */
  createHeader() {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', 'Bearer: ' + token);
  }
}
