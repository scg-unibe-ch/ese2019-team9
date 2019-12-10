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

/**
 * The page to display the details of an order and the chat
 */
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
/**
 * @ignore
 */
  constructor(private formBuilder: FormBuilder,
              private progressIndicatorService: ProgressIndicatorService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private navController: NavController,
              private orderService: OrderService,
              private productService: ProductService,
              private paymentService: PaymentService,
              private iab: InAppBrowser) {
    this.isLoggedIn = authService.isLoggedIn();
    this.userId = authService.getId();
  }

  /**
   * the order which is loaded in the component
   */
  order;
  /**
   * a variable if the user is logged in
   */
  private isLoggedIn = false;
  /**
   * A boolean indicating whther information is being loaded form the backend at the moment
   */
  isLoading = true;
  /**
   * The id of the user
   */
  userId;
  /**
   * The id of the order
   */
  orderId;
  /**
   * A boolean indicating whether the user is seller
   */
  isSeller = false;
  /**
   * A FormGroup for all Chat Controls
   */
  chatForm: FormGroup;
  /**
   * A FormGroup for all Review Controls
   */
  reviewForm: FormGroup;
  /**
   * The default
   */
  rating = 5;
  /**
   * The number of filled Stars
   */
  filledStars = 5;
  /**
   * The token used for the payment
   */
  private paymentToken;

  /**
   * The messages to be displayed if a FormControl is invalid
   */
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

  /**
   * Retrieves the order Information and groups the forms
   */
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

  /**
   * Helper function to use ngFor
   * @param n the size of the array
   */
  array(n: number): number[] {
    const arr = Array(n);
    return Array.from(arr.keys()).map(ind => ind + 1);
  }

  /**
   * Change the {@link #rating variable}
   * @param n the new rating
   */
  onRatingChanged(n: number) {
    this.rating = n;
  }

  /**
   * Change the number of filled Stars
   * @param n the new number of illed Stars
   */
  fillTo(n: number): void {
    this.filledStars = n;
  }

  /**
   * Reset number of filled starts to current rating
   */
  resetStars() {
    this.filledStars = this.rating;
  }

  /**
   * Accept the currently displayed order
   */
  acceptOrder() {
    this.orderService.accept(this.orderId).subscribe(data => {
      this.displayOrderInformation();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be accepted. Please try again.', 'danger');
    });
  }

  /**
   * Adds a new review to the product if the review form is valid
   */
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

  /**
   * Rejects the currently displayed order
   */
  rejectOrder() {
    this.orderService.reject(this.orderId).subscribe(data => {
      this.displayOrderInformation();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be rejected. Please try again.', 'danger');
    });
  }

  /**
   * Tries to pay the currently displayed order
   */
  payOrder() {
    try {
      this.paymentService.createPayment(this.orderId).subscribe(data => {
        const link = (data as any).payment.links[1].href;
        this.paymentToken = (data as any).token;
        localStorage.setItem('paymentToken', this.paymentToken);

        if (!document.URL.startsWith('http')) {
          const browser = this.iab.create(link);
          browser.show();
        } else {
          window.open(link, '_self');
        }

      });
    } catch (err) {
      this.progressIndicatorService.presentToast('Order could not be paid. Please try again.', 'danger');
    }
  }

  /**
   * Fetches all Order Details and displays them
   */
  displayOrderInformation() {
    this.orderService.getOrderById(this.orderId)
      .subscribe(
        data => {
          this.order = data;

          if (this.order.seller._id != this.authService.getId() && this.order.buyer._id != this.authService.getId() && !this.authService.isAdmin()) {
            this.navController.pop();
          }

          const sellerId = (this.order.seller._id as string);
          const userId = (this.authService.getId() as string);
          this.isSeller = sellerId == userId ? true : false;
          this.isLoading = false;
        },

        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
  }

  /**
   * Sends a new message if the message form is valid
   */
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

  /**
   * Formats date in the wanted format
   */
  formatDate = function(date: Date) {
    let MM = date.getMonth() + 1; // getMonth() is zero-based
    let dd = date.getDay();
    let hh = date.getHours();
    let mm = date.getMinutes();

    const dateString = ['' + (dd > 9 ? '' : '0') + dd,
    '' + (MM > 9 ? '' : '0') + MM,
    date.getFullYear(),
   ].join('.');

    const timeString = [(hh > 9 ? '' : '0') + hh,
    (mm > 9 ? '' : '0') + mm
   ].join(':');

    return dateString + ' ' + timeString;
  };

  /**
   * Sends a new Status message into the chat
   * @param message the message to be displayed
   * @param order the order
   */
  returnStatusMessage(message: any, order: any) {
    if (!message.message) {
      return 'Error';
    }
    const text = (message.message as string);
    const args = (message.args as any);
    const sellerArticle = this.isSeller ? 'your' : 'the';
    const buyerArticle = !this.isSeller ? 'your' : 'the';

    const sDate = this.formatDate(new Date (order.startDate));
    const eDate = this.formatDate(new Date(order.endDate));

    if (!text.localeCompare('[INITIAL REQUEST]')) {
      return '<i>Requested ' + sellerArticle + ' product <br><br>Start of event: <b>' +
      sDate + '</b> <br>End of event: <b>' + eDate + '</b>';
    }

    if (!text.localeCompare('[ACCEPT]')) {
      return '<i>Accepted ' + buyerArticle + ' request</i>';
    }

    if (!text.localeCompare('[REJECT]')) {
      return '<i>Rejected ' + buyerArticle + ' request</i>';
    }

    if (!text.localeCompare('[PAY]')) {
      return '<i>Paid the invoice of <b>' + order.product.price + 'CHF </b></i>';
    }

    if (!text.localeCompare('[REVIEW]') && message.args) {
      return '<i>Rated the product <b>' + message.args.rating + ' stars </b></i><br>' +
        (message.args.comment ? '<br>Comment: <br>' + message.args.comment : '') + '';
    }

    return '<i>Unknown status message</i>';
  }

}
