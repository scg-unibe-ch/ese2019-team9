import {
  Component,
  OnInit
} from '@angular/core';
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
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})

export class MyProductsPage implements OnInit {
  selectedTab;
  orders;
  userId;

  constructor(private progressIndicatorService: ProgressIndicatorService, private orderService: OrderService, private authService: AuthService) {}

  async ngOnInit() {
    this.selectedTab = 0;
    //await this.getOrders;
    console.log("from parent");
    console.log(this.orders);
    //this.dataService.changeOrders(this.orders);
  }

  onTabSwitch(evt: CustomEvent) {
    const id = parseInt(evt.detail.value, 10);
    this.selectedTab = id;
  }

  /*
  async getOrders() {
    this.userId = this.authService.getId();
    await this.orderService.getOrders(this.userId).subscribe(data => {
      this.orders = data.map(doc => {
        return Object.assign(doc, {
          openDetails: false
        });
      });
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Orders could not be updated', 3500, 'danger');
    });
  }*/

}