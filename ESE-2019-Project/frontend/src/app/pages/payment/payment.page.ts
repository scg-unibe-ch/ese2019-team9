import {
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  NavController
} from '@ionic/angular';

import {
  PaymentService
} from '../../core/services/paymentService/payment.service';

/**
 * The page to display the updates of the payment process
 */
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  /**
   * @ignore
   */
  constructor(private route: ActivatedRoute, private navController: NavController, private paymentService: PaymentService, ) {}

  /**
   * The payment token used in the process
   */
  token;

  /**
   * The status of the payment
   */
  status;
  /**
   * The id of the order to be paid
   */
  orderId;

  /**
   * Tries to read the token for the payment and then execute it.
   * Update the text on the page based on the status of the payment
   */
  ngOnInit() {
    this.status = 'wait';

    this.route.paramMap.subscribe(params => {
      if (params.get('token') === null) {
        this.status = 'error';
      } else {
        this.token = params.get('token');
        this.route.queryParams.subscribe(params => {
          if (!params || !params.paymentId || !params.PayerID) {
            this.status = 'error';
            return;
          }

          this.paymentService.executePayment(
              params.paymentId,
              params.PayerID,
              this.token)
            .subscribe(res => {
              console.log(res);
              if ((res as any).orderId) {
                this.orderId = (res as any).orderId;
                localStorage.setItem('token', (res as any).loginToken);
                this.status = 'ok';
              } else {
                this.status = 'fail';
              }

            });
        });
      }
    });
  }

}