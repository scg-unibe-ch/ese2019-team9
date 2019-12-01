import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PopoverController} from '@ionic/angular';

import { AuthService } from '../../../../services/authService/auth.service';
import {PopoverService} from '../../../../services/popoverService/popover.service';

import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss']
})
export class ProfilePopoverComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private popoverService: PopoverService,
    private popoverController: PopoverController,
    private router: Router) { }

  ngOnInit() {
    this.show = true;
    this.isAdmin = this.authService.isAdmin();
  }

  show = false;
  isAdmin = false;

  async dismissPopover() {
    await this.popoverController.dismiss();
  }
}
