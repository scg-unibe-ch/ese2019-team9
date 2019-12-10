import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/core/services/productService/product.service';

import { OrderService } from 'src/app/core/services/orderService/order.service';

import { ProgressIndicatorService } from '../../core/services/progressIndicatorService/progress-indicator.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/authService/auth.service';

/**
 * The page to display the details of the product
 */
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {
  /**
   * The FormGroup to order the product
   */
  orderForm: FormGroup;
  /**
   * The FormGroup to create a review
   */
  reviewForm: FormGroup;
/**
 * The id of the product
 */
  private productId;
  /**
   * The information of the product
   */
  private productInformation;
  /**
   * A boolean indicating whether the order form should be displayed
   */
  private showOrderingDetails = false;
  /**
   * A boolean indicating whether a user is logged in
   */
  private isLoggedIn = false;
  /**
   * The number of filled stars on a rating
   */
  private filledStars = 5;
  /**
   * The default rating
   */
  private rating = 5;

  /**
   * The start date of the order
   */
  private startDate;
  /**
   * The end date of the order
   */
  private endDate;
  /**
   * Today as an ISO String
   */
  today = new Date().toISOString();
  /**
   * Max date
   */
 maxDate = new Date().getFullYear() + 3;

  /**
   * A boolean indicating whether information is being loaded from the backend at the moment
   */
  isLoading = true;
  /**
   * A boolean indicating whether the user has already bought the product
   */
  _hasBought = false;
  /**
   * The validation messages to display when a FormControl is invalid
   */
  validationMessages = {
    startDate: [
      {
        type: 'required',
        message: 'Start date is required'
      },
      {
        type: 'text',
        message: 'Not a valid address'
      },
      {
        type: 'min',
        message: 'Title must be longer than 5 characters'
      },
      {
        type: 'maxlength',
        message: 'Title must be less than 30 characters'
      }
    ],
    endDate: [
      {
        type: 'required',
        message: 'End date is required'
      },
      {
        type: 'number',
        message: 'Not a valid number'
      },
      {
        type: 'min',
        message: 'Event end has to be after event start'
      },
      {
        type: 'maxlength',
        message: 'Price must be lower than 1000000 CHF'
      }
    ],
    remarks: [
      {
        type: 'required',
        message: 'Remarks are required'
      },
      {
        type: 'maxlength',
        message: 'Remarks must me shorter than 10000 characters'
      }
    ],
    comment: [
      {
        type: 'maxlength',
        message: 'Comment must me shorter than 10000 characters'
      }
    ]
  };

  /**
   * @ignore
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private progressIndicatorService: ProgressIndicatorService,
    public authService: AuthService
  ) {
	this.isLoggedIn = authService.isLoggedIn();
  }

  /**
   * Return the product informations
   */
  get product() {
    return this.productInformation;
  }

  /**
   * return the order informations
   */
  get orderingDetails() {
    return this.showOrderingDetails;
  }

  /**
   * return the login status of the user
   */
  get loggedIn() {
    return this.isLoggedIn;
  }

  /**
   * Sets the end time to the picked start time + 4 hours
   */
  onChangeStartDate() {
    const defaultEndTime = new Date(this.orderForm.controls.startDate.value);
    defaultEndTime.setTime(defaultEndTime.getTime() + 4 * 60 * 60 * 1000);
    this.orderForm.controls.endDate.setValue(defaultEndTime.toISOString());
  }

  /**
   * If the order Form is valid, places an order and resets the form
   */
  onOrder() {
    if (this.orderForm.invalid) {
      return;
    }

    const val = this.orderForm.value;
    this.orderService.place(val, this.productId).subscribe(
      data => {
        this.orderForm.reset();
        this.progressIndicatorService.presentToast('Order successfully placed');
      },
      error => {
       // console.log(error.error.error);
        this.progressIndicatorService.presentToast(error.error.error, 'danger');
      }
    );
  }

  /**
   * A helper function used for easier use of the ngFor. Creates an array with the given amount of items
   * @param n the number of indices in the array
   */
  array(n: number): number[] {
    const arr = Array(n);
    return Array.from(arr.keys()).map(ind => ind + 1);
  }

  /**
   * Adds a review to the product if the review form was valid
   */
  onSubmitReview() {
    if (this.reviewForm.invalid) {
      return;
    }

    const val = {
      comment: this.reviewForm.value.comment,
      rating: this.rating,
      productId: this.productId
    };
    this.productService.addReview(val).subscribe(
      data => {
        this.orderForm.reset();
        this.progressIndicatorService.presentToast('Review successfully added');
      },
      error => {
        //console.log(error.error.error);
        this.progressIndicatorService.presentToast(error.error.error, 'danger');
      }
    );
  }

  /**
   * Changes the stars to n filled stars
   * @param n the amount of filled Stars
   */
  fillTo(n: number): void {
    this.filledStars = n;
  }

  /**
   * returns whether the user has bought this product
   */
  get hasBought() {
    return this._hasBought;
  }

  /**
   * Gets the product id from the route params and fetches the user and product informations
   * Also groups the forms.
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('productId') === null) {
        this.router.navigate(['/subcategory']);
      } else {
        this.productId = params.get('productId');
        this.displayProductInformation(this.productId);
      }
    });

    if (this.authService.isLoggedIn()) {
      this.productService.hasBought(this.productId).subscribe(data => {
        this._hasBought = (data as any).hasBought;
      });
    }

    this.orderForm = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required, Validators.min]],
      remarks: ['', [Validators.required, Validators.maxLength(400)]]
    });

    this.reviewForm = this.formBuilder.group({
      comment: [''],
      rating: [5, [Validators.required]]
    });
  }

  /**
   * Hide the order form when leaving the page
   */
  ionViewDidLeave() {
    this.showOrderingDetails = false;
  }

  /**
   * toggle the visibility of the order form
   */
  showHideOrderingDetails() {
    this.showOrderingDetails = !this.showOrderingDetails;
  }

  /**
   * Change the {@link #rating} variable to the new rating
   * @param n the new rating
   */
  onRatingChanged(n: number) {
    this.rating = n;
  }

  /**
   * Fetches the product informations from the backend and displays them
   * @param productId the id of the product
   */
  displayProductInformation(productId: any) {
    this.productService.getSingleProduct(productId).subscribe(
      data => {
        this.isLoading = false;
        this.productInformation = data;
        this.isLoading = false;
      },

      err => {
        this.isLoading = false;
        this.isLoading = false;
      }
    );
  }
}