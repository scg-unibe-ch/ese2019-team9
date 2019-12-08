import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  OrderService
} from '../../../core/services/orderService/order.service';
import {
  AuthService
} from '../../../core/services/authService/auth.service';
import {
  ProgressIndicatorService
} from '../../../core/services/progressIndicatorService/progress-indicator.service';

import {
  FilterAndSearchService
} from 'src/app/core/services/filterAndSearchService/filter-and-search.service';

/**
 * A component to display all the orders and interact with them
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  /**
   * An array with all orders that match the filter argument
   */
  ordersToShow;
  /**
   * An array with all orders of the user
   */
  orders;
  /**
   * The userid of the user
   */
  private userId;
  /**
   * A boolean indicating whter information is currently being loaded from the backend
   */
  private loading = true;

  /**
   * Assigns new private variables
   * @param orderService Auto injected OrderService used to fetch all orders
   * @param progressIndicatorService Auto injected ProgressIndicatorService used for displaying toasts
   * @param authService Auto injected AuthService used to get the user id
   * @param filterService  Auto injected FilterAndSearchService used to filter the orders
   */
  constructor(
    private orderService: OrderService,
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService,
    private filterService: FilterAndSearchService
  ) {}

  /**
   * Fetches all orders
   */
  ngOnInit() {
    this.loading = true;
    this.getOrders();
  }

  /**
   * Accepts an order
   * @param orderId The id of the order to accept
   */
  acceptOrder(orderId: string) {
    this.orderService.accept(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Order accepted', 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be accepted', 'danger');
    });
  }

  /**
   * Rejects an order
   * @param orderId The id of the order to reject
   */
  rejectOrder(orderId: string) {
    this.orderService.reject(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Order rejected', 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be rejected', 'danger');
    });
  }

  /**
   * Fetches all orders from the backend and filters them
   */
  getOrders() {
    this.userId = this.authService.getId();
    this.orderService.getSellerOrders().subscribe(data => {
      if (data.length === 0) {
        this.progressIndicatorService.presentToast('No offers found', 'danger');
      }
      this.orders = data.map(doc => {
        return Object.assign(doc, {
          openDetails: false
        });
      });
      this.ordersToShow = this.filterService.filter(this.orders, '=;status;pending');
      this.loading = false;
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be updated', 'danger');
    });
  }

  /**
   * Changes the filter which orders to display
   * @param ev the ion change event of the selection
   */
  onFilterChange(ev) {
    if ((ev.target.value as String).localeCompare("all")) {
      this.ordersToShow = this.filterService.filter(this.orders, '=;status;' + (ev.target.value as String));
    } else {
      this.ordersToShow = this.orders;
    }
  }

  /**
   * Reloads the products
   */
  reloadProducts() {
    this.loading = true;
    this.getOrders();
  }

  /**
   * Returns whether information is being loaded from the backend at the moment
   */
  get isLoading() {
    return this.loading;
  }

}