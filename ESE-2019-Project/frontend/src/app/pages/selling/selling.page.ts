import {
  Component,
  OnInit
} from '@angular/core';
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
  FormGroup
} from '@angular/forms';

/**
 * The page with all the necessary information for sellers. Shows all of the current users products and all offers for these,
 * if the user is a seller. Else displays a message to the user to share additional needed information on the profile.
 */
@Component({
  selector: 'app-selling',
  templateUrl: './selling.page.html',
  styleUrls: ['./selling.page.scss'],
})

export class SellingPage implements OnInit {
  /**
   * The currently selected tab
   */
  selectedTab;
  /**
   * All orders of a user
   */
  orders;
  /**
   * The id of the currently logged in user
   */
  userId;
  /**
   * The currently logged in user
   */
  user;
  /**
   * A boolean indicating whether the current user is a seller
   */
  isSeller = false;
  /**
   * A boolean indicating whether information is being fetched from the backend
   */
  isLoading = true;
  /**
   * The input Form for the additional needed information
   */
  sellerForm: FormGroup;

  /**
   * Assigns new private variables
   * @param progressIndicatorService Auto injected ProgressIndicatorService used for displaying toasts
   * @param authService Auto injected AuthService used to get the user id
   * @param userService Auto injected UserService used to fetch the products of and offers for the user
   * @param formBuilder Auto injected FormBuilder to group the form
   */
  constructor(
    private progressIndicatorService: ProgressIndicatorService,
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder) {}

    /**
     * Sets up the page on Init
     */
  ngOnInit() {
    this.setupSellingPage();
  }

 /**
  * Sets up the page on 
  */
  ionViewDidEnter() {
    this.setupSellingPage();
  }

  /**
   * Selects the first tab, groups the inputs of the form and checks if the user is seller
   */
  setupSellingPage() {
    this.selectedTab = 0;
    this.sellerForm = this.formBuilder.group({
      name: ['', []],
      address: ['', []],
      country: ['', []]
    });
    this.checkIfUserIsSeller();
  }

  /**
   * Checks whether the current user is seller and retrieves the user Id
   */
  checkIfUserIsSeller() {
    this.userService.isSeller().then(res => {
      this.isSeller = res;
      this.isLoading = false;

      this.userId = this.authService.getId();
    });
  }

  /**
   * Switches the currently selected Tab of the sement
   * @param evt the change event
   */
  onTabSwitch(evt: CustomEvent) {
    const id = parseInt(evt.detail.value, 10);
    this.selectedTab = id;
  }

  /**
   * Submits the form and updates the values of the user
   */
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