import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';
import { map } from 'rxjs/operators';

/**
 * The order service which handles
 *  - accepting orders
 *  - placing orders
 *  - rejecting orders
 *  - paying orders
 *  - fetching orders
 *  - creating messages
 */
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  /**
   * Assings two new private variables
   * @param httpClient Auto injected HttpClient used for making the backend calls
   * @param authService Auto injected authService used for retrieving the token which is used as authentication on the backend
   */
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  /**
   * The base Url of the order endpoint
   */
  orderEndpoint = 'https://moln-api.herokuapp.com/order';

  /**
   * Places a new order
   * @param body an object containing a startDate, an endDate and a description
   * @param productId the product on which an order is placed
   * @returns an observable with the server response
   */
  place(body: any, productId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    const data = {
      startDate: new Date((body.startDate as string).replace(/\.(.*)\+/, '+')),
      endDate: new Date((body.endDate as string).replace(/\.(.*)\+/, '+')),
      description: body.description,
      productId
    };

    return this.httpClient.post(this.orderEndpoint + '/place', data, {
      headers
    });
  }

  /**
   * Accepts an order
   * @param orderId the order which is to be accepted
   * @returns an observable with the server response
   */
  accept(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(
      this.orderEndpoint + '/accept',
      { orderId },
      { headers }
    );
  }

  /**
   * Rejects an order
   * @param orderId the order which is to be rejected
   * @returns an observable with the server response
   */
  reject(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(
      this.orderEndpoint + '/reject',
      { orderId },
      { headers }
    );
  }

  /**
   * Pays an order
   * @param orderId the order which is to be payed
   * @returns an observable with the server response
   */
  pay(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(
      this.orderEndpoint + '/pay',
      { orderId },
      { headers }
    );
  }

  /**
   * Get all orders (for a seller)
   * @returns an observable with the server response
   */
  getSellerOrders() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get<[]>(this.orderEndpoint + '/seller', {
      headers
    });
  }

  /**
   * Get all NEW orders (for a seller)
   * @returns an observable with the server response
   */
  getNewSellerOrders() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get<[]>(this.orderEndpoint + '/seller/new', {
      headers
    });
  }

  /**
   * Get all orders a specific user has placed
   * @returns an observable with the server response
   */
  getBuyerOrders() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get<[]>(this.orderEndpoint + '/buyer', {
      headers
    });
  }

  /**
   * Fetches the details of an offer from the backend
   * @param orderId the id of the order
   * @returns an observable with the server response
   */
  getOrderById(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.get(this.orderEndpoint + `/id/${orderId}`, {
      headers
    });
  }

  /**
   * Sends a new message
   * @param body the body, which has to contain a orderId and a message Field.
   * @returns an observable with the server response
   */
  sendMessage(body: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.post(this.orderEndpoint + '/message/send', body, {
      headers
    });
  }
}
