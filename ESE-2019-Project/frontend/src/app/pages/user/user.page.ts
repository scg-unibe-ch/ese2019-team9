import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  NavController
} from '@ionic/angular';

import { UserService } from 'src/app/core/services/userService/user.service';
import { ProductService } from 'src/app/core/services/productService/product.service';

/**
 * A page to display a users information
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  /**
   * Assigns new private variables
   * @param route Auto injected ActivatedRoute to get the userid from the router parameter
   * @param navController Auto injected NavController to redirects users back
   * @param userService Auto injected UserService to fetch userdata
   * @param productService Auto injected ProductService to fetch products from the user
   */
  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private userService: UserService,
    private productService: ProductService) { }

    /**
     * The id of the user
     */
  userId;
  /**
   * The user informations
   */
  user;
  /**
   * The products of the user
   */
  products;

  /**
   * Tries to get the userid from the routes parameter. Redirects a page back if it wasn't successful. Else fetches the user informations
   */
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

  /**
   * Fetches user informations and products and displays them
   */
  displayUserInformation() {
    this.userService.getSingleUser(this.userId).subscribe(data => {
      this.user = data;
    });

    this.productService.getProductsByUserId(this.userId).subscribe(data => {
      this.products = data;
    });
  }

}
