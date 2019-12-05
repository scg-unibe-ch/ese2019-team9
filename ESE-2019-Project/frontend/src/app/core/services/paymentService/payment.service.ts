import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  AuthService
} from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentEndpoint = 'https://moln-api.herokuapp.com/payment';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService) {}

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

  executePayment(paymentId, payerId, paymentToken) {
    try {
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

      if (!paymentToken || !payerId || !paymentId)
        return;

      const body = {
        paymentId: paymentId,
        payerId: payerId,
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