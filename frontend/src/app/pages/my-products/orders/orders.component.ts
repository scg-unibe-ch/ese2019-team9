import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../core/services/orderService/order.service';
import {AuthService} from '../../../core/services/authService/auth.service';
import {ProgressIndicatorService} from '../../../core/services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders = [];
  private userId;

  constructor(
    private orderService : OrderService, 
    private progressIndicatorService: ProgressIndicatorService,
    private authService : AuthService
    ) { }

  ngOnInit() {
        this.getOrders();
    }

  acceptOrder(orderId: string) {
    this.orderService.accept(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Product successfully deleted', 3500, 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 3500, 'danger');
    });
  }

  rejectOrder(orderId: string) {
    this.orderService.reject(orderId).subscribe(data => {
      this.progressIndicatorService.presentToast('Orders successfully deleted', 3500, 'success');
      this.reloadProducts();
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be deleted', 3500, 'danger');
    });
  }
    ngOnDestroy(): void {
        this.getOrders();
    }

    getOrders() {
        this.userId = this.authService.getId();
        this.orderService.getOrders(this.userId).subscribe(data => {
            this.orders = data.map(doc => {
              return Object.assign(doc, { openDetails:false });
            });
        }, err => {
            console.log(err);
            this.progressIndicatorService.presentToast('Orders could not be updated', 3500, 'danger');
        });
    }

    reloadProducts() {
        this.getOrders();
    }

}
