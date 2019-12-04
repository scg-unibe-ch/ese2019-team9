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
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}
  orderEndpoint = 'https://moln-api.herokuapp.com/order';

  place(body: any, productId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    const data = {
      startDate: body.startDate,
      endDate: body.endDate,
      description: body.description,
      productId: productId
    };

    return this.httpClient.post(this.orderEndpoint + '/place', data, {
        headers
      })
      .pipe(map(res => {
        return res;
      }));
  }

  accept(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.orderEndpoint + '/accept', {
        orderId
      }, {
        headers
      })
      .pipe(map(res => {
        return res;
      }));
  }

  reject(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.orderEndpoint + '/reject', {
        orderId
      }, {
        headers
      })
      .pipe(map(res => {
        return res;
      }));
  }

  pay(orderId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
    return this.httpClient.patch(this.orderEndpoint + '/pay', {
        orderId
      }, {
        headers
      })
      .pipe(map(res => {
        return res;
      }));
  }

  getSellerOrders(userId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get < [] > (this.orderEndpoint + '/seller', {
      headers
    });
  }

  getNewSellerOrders(userId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get < [] > (this.orderEndpoint + '/seller/new', {
      headers
    });
  }

  getBuyerOrders(userId: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.get < [] > (this.orderEndpoint + '/buyer', {
      headers
    });
  }

  getOrderById(orderId: string) {
    const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);
        return this.httpClient.get(this.orderEndpoint + `/id/${orderId}`, {
            headers: headers
        })
  }

  sendMessage(body: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer: ' + token);

    return this.httpClient.post(this.orderEndpoint + '/message/send', body, {
        headers
      })
      .pipe(map(res => {
        return res;
      }));
  }
}