import {
	Component,
	OnInit
} from '@angular/core';

import {
	ActivatedRoute,
	Router
} from '@angular/router';

import {
	ProductService
} from 'src/app/core/services/productService/product.service';

import {
	first
} from 'rxjs/operators';

import {
	CategoryService
} from 'src/app/core/services/categoryService/category.service';

import {
	OrderService
} from 'src/app/core/services/orderService/order.service';

import {
	ProgressIndicatorService
} from '../../core/services/progressIndicatorService/progress-indicator.service';

import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';

import {
	AuthService
} from 'src/app/core/services/authService/auth.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.page.html',
	styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {
	orderForm: FormGroup;
	reviewForm: FormGroup;

	private productId;
	private productInformation;
	private showOrderingDetails = false;
	private isLoggedIn = false;
	private filledStars = 5;
	private rating = 5;

	isLoading = true;
	_hasBought = false;

	validationMessages = {
		startDate: [{
				type: 'required',
				message: 'Start date is required'
			},
			{
				type: 'text',
				message: 'Not a valid address'
			},
			{
				type: 'minlength',
				message: 'Title must be longer than 5 characters'
			},
			{
				type: 'maxlength',
				message: 'Title must be less than 30 characters'
			}
		],
		endDate: [{
				type: 'required',
				message: 'End date is required'
			},
			{
				type: 'number',
				message: 'Not a valid number'
			},
			{
				type: 'minlength',
				message: 'Price must be more than 10 CHF'
			},
			{
				type: 'maxlength',
				message: 'Price must be lower than 1000000 CHF'
			}
		],
		description: [{
				type: 'required',
				message: 'Description is required'
			},
			{
				type: 'maxlength',
				message: 'Description must me shorter than 10000 characters'
			}
		],
		comment: [{
			type: 'maxlength',
			message: 'Comment must me shorter than 10000 characters'
		}]
	};

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
		private orderService: OrderService,
		private formBuilder: FormBuilder,
		private progressIndicatorService: ProgressIndicatorService,
		private authService: AuthService
	) {
		this.isLoggedIn = authService.isLoggedIn();
		console.log(this.loggedIn);
	}

	get product() {
		return this.productInformation;
	}

	get orderingDetails() {
		return this.showOrderingDetails;
	}

	get loggedIn() {
		return this.isLoggedIn;
	}

	onOrder() {
		if (this.orderForm.invalid) {
			return;
		}

		const val = this.orderForm.value;
		this.orderService.place(val, this.productId).subscribe(data => {
			this.orderForm.reset();
			this.progressIndicatorService.presentToast('Order successfully placed', 3500, 'success');
		}, error => {
			console.log(error.error.error);
			this.progressIndicatorService.presentToast(error.error.error, 3500, 'danger');
		});
	}

	array(n: number): number[] {
        const arr = Array(n);
        return Array.from(arr.keys()).map(ind => ind + 1);
	}
	


	onSubmitReview() {
		if (this.reviewForm.invalid) {
			return;
		}

		const val = {
			comment: this.reviewForm.value.comment,
			rating: this.rating,
			productId: this.productId
		};
		this.productService.addReview(val).subscribe(data => {
			this.orderForm.reset();
			this.progressIndicatorService.presentToast('Review successfully added', 3500, 'success');
		}, error => {
			console.log(error.error.error);
			this.progressIndicatorService.presentToast(error.error.error, 3500, 'danger');
		});
	}

	fillTo(n: number): void {
		this.filledStars = n;
	}

	get hasBought() {
		return this._hasBought;
	}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			if (params.get('productId') === null) {
				this.router.navigate(['/subcategory']);
			} else {
				this.productId = params.get('productId');
				this.displayProductInformation(this.productId);
			}
		});

		this.productService.hasBought(this.productId).subscribe(data => {
			this._hasBought = (data as any).hasBought;
		});


		this.orderForm = this.formBuilder.group({
			startDate: ['', [Validators.required]],
			endDate: ['', [Validators.required]],
			description: ['', [Validators.required, Validators.maxLength(400)]]
		});

		this.reviewForm = this.formBuilder.group({
			comment: [''],
			rating: [5, [Validators.required]],
		});
	}

	onClickBuy() {
		this.showOrderingDetails = !this.showOrderingDetails;
	}

	onRatingChanged(n: number) {
		this.rating = n;
	}

	displayProductInformation(productId: any) {
		this.productService
			.getSingleProduct(productId)
			.subscribe(
				data => {
					this.productInformation = data;
					this.isLoading = false;
				},

				err => {
					console.log(err);
				}
			);
	}
}