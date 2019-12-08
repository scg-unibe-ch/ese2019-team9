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

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  ordersToShow;
  orders;
  private userId;
  private loading = true;

  constructor(
    private orderService: OrderService,
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService,
    private filterService: FilterAndSearchService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.getOrders();
  }

  acceptOrder(orderId: string) {
    this.orderService.accept(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Order accepted', 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be accepted', 'danger');
    });
  }

  rejectOrder(orderId: string) {
    this.orderService.reject(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Order rejected', 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Order could not be rejected', 'danger');
    });
  }
  ngOnDestroy(): void {}

  getOrders() {
    this.userId = this.authService.getId();
    this.orderService.getSellerOrders(this.userId).subscribe(data => {
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

  onFilterChange(ev) {
    if ((ev.target.value as String).localeCompare("all")) {
      this.ordersToShow = this.filterService.filter(this.orders, '=;status;' + (ev.target.value as String));
    } else {
      this.ordersToShow = this.orders;
    }
  }

  reloadProducts() {
    this.loading = true;
    this.getOrders();
  }

  get isLoading() {
    return this.loading;
  }

}