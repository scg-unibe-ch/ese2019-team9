import { Component, OnInit } from '@angular/core';
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

import {OrderService} from '../../core/services/orderService/order.service';
import {
	ActivatedRoute,
  Router
} from '@angular/router';

import { NavController } from '@ionic/angular';

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
    private orderService: OrderService) { 
      this.isLoggedIn = authService.isLoggedIn();
    }

  order;
  private isLoggedIn = false;
  isLoading = true;
  orderId;
  isSeller = false;
  chatForm : FormGroup;

  validationMessages = {
		message: [{
				type: 'required',
				message: 'Message is required'
      },
    {
      type:'maxlength',
      message:'Message has to be shorter than 10000 characters'
    }]
	};

  ngOnInit() {
		this.route.paramMap.subscribe(params => {
			if (params.get('orderId') === null) {
        this.navController.pop();
			} else {
				this.orderId = params.get('orderId');
        this.displayOrderInformation(this.orderId);
			}
		});


		this.chatForm = this.formBuilder.group({
			message: ['', [Validators.required, Validators.maxLength(400)]]
    });
  }
  
  displayOrderInformation(orderId: any) {
    this.orderService.getOrderById(orderId)
      .subscribe(
        data => {
          this.order = data;
          
          if (this.order.seller._id != this.authService.getId() && this.order.buyer._id != this.authService.getId() && !this.authService.isAdmin())
            this.navController.pop();

          this.isSeller = this.order.seller._id == this.authService.getId() ? true : false;
          this.isLoading = false;
        },

        err => {
          console.log(err);
        }
      );
  }

}
