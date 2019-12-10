import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PopoverController} from '@ionic/angular';

import { AuthService } from '../../../../services/authService/auth.service';
import {PopoverService} from '../../../../services/popoverService/popover.service';

import { EventEmitter } from 'events';
import { Router } from '@angular/router';

/**
 * The profile Popover with a basic navigation to the most important sites
 */
@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss']
})
export class ProfilePopoverComponent implements OnInit {

  /**
   * The variable where the users admin status is stored
   */
  isAdmin = false;

  /**
   * Assings new private Variables
   * @param authService Auto injected AuthService used for checking if the user is an admin
   * @param popoverController Auto injected PopoverController used for dismissing the popover
   */
  constructor(
    public authService: AuthService,
    private popoverController: PopoverController) { }

    /**
     * Checks if the user is an Admin and updates the corresponding variable {@link #isAdmin}
     */
  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  /**
   * Dismisses the popover
   */
  async dismissPopover() {
    await this.popoverController.dismiss();
  }
}
