import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Input('validationMessages') validationMessages: any;
  @Input('inputForm') inputForm: FormGroup;
  @Input() givenName: string;
  @Input() text: string;
  @Input() type = 'text';
  @Input() inputMode = 'text';
  @Input() async: {pendingText: string, validText: string};

  isPassword = false;
  showingPassword = false;

  constructor() { }

  ngOnInit() {
    this.isPassword = this.type === 'password';
  }

  showPassword(bool: boolean) {
    this.showingPassword = bool;
    this.type = this.showingPassword ? 'text' : 'password';
  }
}
