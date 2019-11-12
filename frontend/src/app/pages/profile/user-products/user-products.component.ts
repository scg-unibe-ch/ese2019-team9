import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../core/services/authService/auth.service';
import {ProductService} from '../../../core/services/productService/product.service';
import {ProgressIndicatorService} from '../../../core/services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss'],
})
export class UserProductsComponent implements OnInit {
  userId;
  products = [];

  constructor(
      private authService: AuthService,
      private productService: ProductService,
      private progressIndicatorService: ProgressIndicatorService
  ) { }

  ngOnInit() {
    this.getUserProducts();
  }

  getUserProducts() {
    this.userId = this.authService.getId();
    this.productService.getProductsByUserId(this.userId).subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Products could not be updated', 2000, 'danger');
    });
  }

  reloadProducts(ev: any) {
    if (ev === 'reload') {
      this.getUserProducts();
    }
  }
}
