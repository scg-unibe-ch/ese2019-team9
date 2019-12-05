import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProgressIndicatorService
} from '../../core/services/progressIndicatorService/progress-indicator.service';

import {
  InAppBrowser
} from '@ionic-native/in-app-browser/ngx';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  PaymentService
} from '../../core/services/paymentService/payment.service';

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

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private navController: NavController,
    private orderService: OrderService,
    private productService: ProductService,
    private paymentService: PaymentService,
    private iab: InAppBrowser) {
    this.isLoggedIn = authService.isLoggedIn();
    this.userId = authService.getId();
  }

  order;
  private isLoggedIn = false;
  isLoading = true;
  userId;
  orderId;
  isSeller = false;
  chatForm: FormGroup;
  reviewForm: FormGroup;
  rating = 5;
  filledStars = 5;
  private paymentToken;

  validationMessages = {
    message: [{
        type: 'required',
        message: 'Message is required'
      },
      {
        type: 'maxlength',
        message: 'Message has to be shorter than 10000 characters'
      }
    ]
  };

  ngOnInit() {
    this.isSeller = false;

    this.route.paramMap.subscribe(params => {
      if (params.get('orderId') === null) {
        this.navController.pop();
      } else {
        this.orderId = params.get('orderId');
        this.displayOrderInformation();
      }
    });

    this.chatForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.maxLength(400)]]
    });

    this.reviewForm = this.formBuilder.group({
      comment: [''],
      rating: [5, [Validators.required]],
    });
  }

  array(n: number): number[] {
    const arr = Array(n);
    return Array.from(arr.keys()).map(ind => ind + 1);
  }

  onRatingChanged(n: number) {
    this.rating = n;
  }

  fillTo(n: number): void {
    this.filledStars = n;
  }

  acceptOrder() {
    this.orderService.accept(this.orderId).subscribe(data => {
      this.displayOrderInformation();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be rejected. Please try again.', 'danger');
    });
  }

  onSubmitReview() {
    if (this.reviewForm.invalid) {
      return;
    }

    const val = {
      comment: this.reviewForm.value.comment,
      rating: this.rating,
      productId: this.order.product._id
    };

    this.productService.addReview(val).subscribe(data => {
      this.reviewForm.reset();
      this.progressIndicatorService.presentToast('Review successfully added');
      this.displayOrderInformation();
    }, error => {
      console.log(error.error);
      this.progressIndicatorService.presentToast(error.error.message, 'danger');
    });
  }

  rejectOrder() {
    this.orderService.reject(this.orderId).subscribe(data => {
      this.displayOrderInformation();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be rejected. Please try again.', 'danger');
    });
  }

  payOrder() {
    try {
      this.paymentService.createPayment(this.orderId).subscribe(data => {
        let link = (data as any).payment.links[1].href;
        this.paymentToken = (data as any).token;
        localStorage.setItem('paymentToken', this.paymentToken);

        if (!document.URL.startsWith('http')) {
          const browser = this.iab.create(link);
          browser.show();
        } else {
          window.open(link, "_self");
        }

      });
    } catch (err) {
      this.progressIndicatorService.presentToast('Order could not be paid. Please try again.', 'danger');
    }

    /*
    this.orderService.pay(this.orderId).subscribe(data => {
      this.displayOrderInformation();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be paid. Please try again.', 3500, 'danger');
    });*/
  }

  ngOnDestroy(): void {}

  displayOrderInformation() {
    this.orderService.getOrderById(this.orderId)
      .subscribe(
        data => {
          this.order = data;

          if (this.order.seller._id != this.authService.getId() && this.order.buyer._id != this.authService.getId() && !this.authService.isAdmin())
            this.navController.pop();

          let sellerId = (this.order.seller._id as String);
          let userId = (this.authService.getId() as String);
          this.isSeller = sellerId == userId ? true : false;
          this.isLoading = false;
        },

        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
  }

  onSubmitMessage() {
    if (this.chatForm.invalid) {
      return;
    }

    const body = {
      message: this.chatForm.value.message,
      orderId: this.orderId
    };

    this.orderService.sendMessage(body).subscribe(data => {
      this.chatForm.reset();
      this.displayOrderInformation();
    }, error => {
      console.log(error.error.error);
      this.progressIndicatorService.presentToast(error.error.error, 'danger');
    });
  }

  formatDate = function(date: Date) {
    var MM = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDay();
    var hh = date.getHours();
    var mm = date.getMinutes();

    const dateString = ['' + (dd>9 ? '' : '0') + dd,
    '' + (MM>9 ? '' : '0') + MM,
    date.getFullYear(),
   ].join('.');

   const timeString = [(hh>9 ? '' : '0') + hh,
    (mm>9 ? '' : '0') + mm
   ].join(':');
  
    return dateString + ' ' + timeString;
  }

  returnStatusMessage(message: any, order: any) {
    if (!message.message)
      return "Error";
    const text = (message.message as String);
    const args = (message.args as any);
    const sellerArticle = this.isSeller ? "your" : "the";
    const buyerArticle = !this.isSeller ? "your" : "the";

    const sDate = this.formatDate(new Date (order.startDate));
    const eDate = this.formatDate(new Date(order.endDate));

    if (!text.localeCompare("[INITIAL REQUEST]"))
      return "<i>Requested " + sellerArticle + " product <br><br>Start of event: <b>" +
      sDate + "</b> <br>End of event: <b>" + eDate + "</b>";

    if (!text.localeCompare("[ACCEPT]"))
      return "<i>Accepted " + buyerArticle + " request</i>";

    if (!text.localeCompare("[REJECT]"))
      return "<i>Rejected " + buyerArticle + " request</i>";

    if (!text.localeCompare("[PAY]"))
      return "<i>Paid the invoice of <b>" + order.product.price + "CHF </b></i>";

    if (!text.localeCompare("[REVIEW]") && message.args)
      return "<i>Rated the product <b>" + message.args.rating + " stars </b></i><br>" +
        (message.args.comment ? "<br>Comment: <br>" + message.args.comment : "") + "";

    return "<i>Unknown status message</i>";
  }

}