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

/**
 * Displays all the orders the user placed
 */
@Component({
  selector: 'app-buying',
  templateUrl: './buying.page.html',
  styleUrls: ['./buying.page.scss'],
})
export class BuyingPage implements OnInit {
  /**
   * A list of all the orders
   */
  orders;
  /**
   * The id of the user
   */
  private userId;
  /**
   * A boolean indicating whether information is being loaded from the backend at the moment
   */
  private loading = true;
/**
 * @ignore
 */
  constructor(
    private orderService: OrderService,
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService
  ) {}

  /**
   * Fetch the new orders
   */
  ngOnInit() {
    this.loading = true;
    this.getOrders();
  }

  /**
   * Accept an order
   * @param orderId the id of the order to be accepted
   */
  acceptOrder(orderId: string) {
    this.orderService.accept(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Order successfully accepted');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
    });
  }
  /**
   * Reject an order
   * @param orderId the id of the order to be rejected
   */
  rejectOrder(orderId: string) {
    this.orderService.reject(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Orders successfully deleted');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 'danger');
    });
  }

  /**
   * Fetch all orders
   */
  getOrders() {
    this.userId = this.authService.getId();
    this.orderService.getBuyerOrders().subscribe(data => {
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

  /**
   * Reload all products
   */
  reloadProducts() {
    this.loading = true;
    this.getOrders();
  }

  /**
   * return whether information is being loaded from the backend at the moment
   */
  get isLoading() {
    return this.loading;
  }

}
