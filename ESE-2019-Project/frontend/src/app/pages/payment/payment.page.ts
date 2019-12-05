import {
  Component,
  OnInit
} from '@angular/core';

import {
  AuthService
} from 'src/app/core/services/authService/auth.service';

import {
  OrderService
} from '../../core/services/orderService/order.service';

import {
  ProductService
} from '../../core/services/productService/product.service';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  NavController
} from '@ionic/angular';

import {
  PaymentService
} from '../../core/services/paymentService/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private route: ActivatedRoute, private navController: NavController, private paymentService: PaymentService, ) {}

  token;
  status;
  orderId;


  ngOnInit() {
    this.status='wait';

    this.route.paramMap.subscribe(params => {
      if (params.get('token') === null) {
        this.status='error'
      } else {
        this.token = params.get('token');
        this.route.queryParams.subscribe(params => {
          if (!params || !params.paymentId || !params.PayerID) {
            this.status='error'
            return;
          }

          this.paymentService.executePayment(
              params.paymentId,
              params.PayerID,
              this.token)
            .subscribe(res => {
              console.log(res);
              if((res as any).orderId) {
                this.orderId = (res as any).orderId;
                localStorage.setItem('token', (res as any).loginToken);
                this.status='ok';
              } else {
                this.status='fail';
              }

            });
        });
      }
    });
  }

}