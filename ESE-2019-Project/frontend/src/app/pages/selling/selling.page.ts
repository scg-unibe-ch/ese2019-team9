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
  selector: 'app-selling',
  templateUrl: './selling.page.html',
  styleUrls: ['./selling.page.scss'],
})

export class SellingPage implements OnInit {
  selectedTab;
  orders;
  userId;
  user;
  isSeller = false;
  isLoading = true;
  sellerForm: FormGroup;

  constructor(private progressIndicatorService: ProgressIndicatorService,
    private orderService: OrderService,
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setupSellingPage();
  }

  ionViewDidEnter() {
    this.setupSellingPage();
  }

  setupSellingPage() {
    this.selectedTab = 0;
    this.sellerForm = this.formBuilder.group({
      name: ['', []],
      address: ['', []],
      country: ['', []]
    });
    this.checkIfUserIsSeller();
  }

  checkIfUserIsSeller() {
    this.userService.isSeller().then(res => {
      this.isSeller = res;
      this.isLoading = false;

      this.userId = this.authService.getId();
    });
  }

  onTabSwitch(evt: CustomEvent) {
    const id = parseInt(evt.detail.value, 10);
    this.selectedTab = id;
  }

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

    this.userService.updateUser(this.userId, body, null).subscribe(data => {
      this.progressIndicatorService.presentToast('Information successfully updated', 'success', 4000);
      this.isLoading = true;
      this.checkIfUserIsSeller();
    }, error => {
      console.log(error.error);
      this.progressIndicatorService.presentToast(error.error, 'danger', 4000);
    });
  }
}