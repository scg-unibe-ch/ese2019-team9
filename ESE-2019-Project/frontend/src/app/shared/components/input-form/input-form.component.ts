import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit, AfterViewInit {
  @Input() validationMessages: any;
  @Input() inputForm: FormGroup;
  @Input() givenName: string;
  @Input() text: string;
  @Input() type = 'text';
  @Input() inputMode = 'text';
  @Input() async: {pendingText: string, validText: string};
  @Input() min;
  @Input() max;
  @Input() autofocus;

  isPassword = false;
  showingPassword = false;

  constructor() { }

  ngOnInit() {
    this.isPassword = this.type === 'password';
  }

  ngAfterViewInit() {
    if (this.autofocus) {
      // @ts-ignore
      const input: HTMLIonInputElement = document.getElementById('input');
      setTimeout(()=> {
        input.setFocus();
      }, 150);
    }
  }

  showPassword(bool: boolean) {
    this.showingPassword = bool;
    this.type = this.showingPassword ? 'text' : 'password';
  }
}
