import { Component, OnInit } from '@angular/core';
import {
  OrderService
} from '../../core/services/orderService/order.service';
import {
  AuthService
} from '../../core/services/authService/auth.service';
import {
  ProgressIndicatorService
} from '../../core/services/progressIndicatorService/progress-indicator.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders;
  private userId;
  private loading = true;

  constructor(
    private orderService: OrderService,
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.getOrders();
  }

  acceptOrder(orderId: string) {
    this.orderService.accept(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Product successfully deleted');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
    });
  }

  rejectOrder(orderId: string) {
    this.orderService.reject(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Orders successfully deleted');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
    });
  }
  ngOnDestroy(): void {
    this.getOrders();
  }

  getOrders() {
    this.userId = this.authService.getId();
    this.orderService.getBuyerOrders(this.userId).subscribe(data => {
      this.orders = data.map(doc => {
        return Object.assign(doc, {
          openDetails: false
        });
      });
      this.loading = false;
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be updated', 'danger');
    });
  }

  reloadProducts() {
    this.loading = true;
    this.getOrders();
  }

  get isLoading() {
    return this.loading;
  }

}
