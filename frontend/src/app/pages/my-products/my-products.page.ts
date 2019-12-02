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

import {
  UserService
} from '../../core/services/userService/user.service';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})

export class MyProductsPage implements OnInit {
  selectedTab;
  orders;
  userId;
  user;
  isSeller;
  isLoading = true;
  sellerForm: FormGroup;

  constructor(private progressIndicatorService: ProgressIndicatorService,
    private orderService: OrderService,
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sellerForm = this.formBuilder.group({
      name: ['', []],
      address: ['', []],
      country: ['', []]
    });

    this.selectedTab = 0;
    this.userId = this.authService.getId();
    this.userService.getSingleUser(this.userId).subscribe(result => {
      this.user = result;
      this.isSeller = this.user.name.length > 0 &&
        this.user.country.length > 0 &&
        this.user.address.length > 0 ? true : false;
      this.isLoading = false;

      this.sellerForm.setValue([ {name:this.user.name ? this.user.name : ''}, 
        {country:this.user.country ? this.user.country : ''},
        {address:this.user.address ? this.user.address : ''}]);
    });
    //await this.getOrders;
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

  onPressSubmit() {
    if (this.sellerForm.value.name.length == 0 &&
      this.sellerForm.value.country.length == 0 &&
      this.sellerForm.value.address.length == 0) {
      return;
    }

    const val = {
      name: this.sellerForm.value.name,
      country: this.sellerForm.value.country,
      address: this.sellerForm.value.address
    };

    const body = JSON.stringify(val);

    this.userService.updateUser(this.userId, body).subscribe(data => {
      this.progressIndicatorService.presentToast('Information successfully updated', 3500, 'success');
      this.isLoading = true;
    }, error => {
      console.log(error.error);
      this.progressIndicatorService.presentToast(error.error.message, 3500, 'danger');
    });

    this.userService.isSeller().then(result => {
      this.isSeller = result;
      this.isLoading = false;
    }).catch(err => {
      this.isLoading = false;
    });
  }

}