import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

/**
 * A component which can be used in forms to get an input
 */
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit, AfterViewInit {
  /**
   * The validation Messages to be displayed if the field is invalid
   */
  @Input() validationMessages: any;
  /**
   * The Formgroup to which the control belongs to
   */
  @Input() inputForm: FormGroup;
  /**
   * The ControlName
   */
  @Input() givenName: string;
  /**
   * The label text
   */
  @Input() text: string;
  /**
   * The type of the input
   */
  @Input() type = 'text';
  /**
   * The input mode of the input
   */
  @Input() inputMode = 'text';
  /**
   * The async validator texts
   */
  @Input() async: {pendingText: string, validText: string};
  /**
   * The min value for the date picker
   */
  @Input() min;
  /**
   * The max value for the date picker
   */
  @Input() max;
  /**
   * A boolean whether the input should be autofocused
   */
  @Input() autofocus;

  /**
   * A variable if the input is of type password
   */
  isPassword = false;
  /**
   * A variable if the password should be shown clear
   */
  showingPassword = false;

  /**
   * Saves the type of the input if it is a password
   */
  ngOnInit() {
    this.isPassword = this.type === 'password';
  }

  /**
   * Focuses the input if {@link #autofocus} is set to true
   */
  ngAfterViewInit() {
    if (this.autofocus) {
      // @ts-ignore
      const input: HTMLIonInputElement = document.getElementById('input');
      setTimeout(()=> {
        input.setFocus();
      }, 150);
    }
  }

  /**
   * Toggles the input type between 'password' and 'text' for inputs originally being 'password' typed
   * @param bool a boolean whether to show the password in clear text
   */
  showPassword(bool: boolean) {
    this.showingPassword = bool;
    this.type = this.showingPassword ? 'text' : 'password';
  }
}
