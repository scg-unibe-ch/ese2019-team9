import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';

/**
 * The payment service which handles
 *  - the creation of a payment
 *  - the execution of a payment
 */
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  /**
   * The base Url of the payment backend
   */
  paymentEndpoint = 'https://moln-api.herokuapp.com/payment';

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
   * Creates a new Payment for the given order
   * @param order the Id of the order to be paid
   * @returns an observable with the server response
   */
  createPayment(order: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    const body = {
      orderId: order
    };

    return this.httpClient.post(this.paymentEndpoint + '/create', body, {
      headers
    });
  }

  /**
   * Executes the PayPal Payment
   * @param paymentId the id of the payment
   * @param payerId the id of the buyer
   * @param paymentToken the token given for this payment
   * @returns an observable with the server response
   */
  executePayment(paymentId, payerId, paymentToken) {
    try {
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set(
        'Authorization',
        'Bearer: ' + token
      );

      if (!paymentToken || !payerId || !paymentId) { return; }

      const body = {
        paymentId,
        payerId,
        token: paymentToken
      };

      return this.httpClient.post(this.paymentEndpoint + '/execute', body, {
        headers
      });
    } catch (err) {
      console.log(err);
      return;
    }
  }
}
