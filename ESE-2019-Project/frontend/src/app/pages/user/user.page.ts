import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  NavController
} from '@ionic/angular';

import { UserService } from 'src/app/core/services/userService/user.service';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navController: NavController,
    private userService: UserService,
    private productService: ProductService) { }

  userId;
  user;
  products;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('userId') === null) {
        this.navController.pop();
      } else {
        this.userId = params.get('userId');
        this.displayUserInformation();
      }
    });
  }

  displayUserInformation() {
    this.userService.getSingleUser(this.userId).subscribe(data => {
      this.user = data;
    });

    this.productService.getProductsByUserId(this.userId).subscribe(data => {
      this.products = data;
    });
  }

}
