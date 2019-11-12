import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/authService/auth.service';
import { PopoverService } from '../../services/popoverService/popover.service';

/**
 * Registration Component.
 * Has a form with two required fields and a button to make a registration request.
 */
@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

	/**
	 * The two inputs and the validators grouped as a `FormGroup`
	 */
	registrationForm: FormGroup;
	/**
	 * Message object with strings that appear when the input isn't of the correct form. 
	 */
	validationMessages = {
		email: [
			{ type: 'required', message: 'Email is required' },
			{ type: 'email', message: 'Not a valid address' }
		],
		password: [
			{ type: 'required', message: 'Password is required' },
			{ type: 'minlength', message: 'Password must contain 6 characters' }
		]
	};

	/**
	 * Error message that gets displayed if the backend returns an error code
	 */
	errorMessage;

	/**
	 * Assigns four new variables `formBuilder`, `authService`, `popoverService` and `popoverController`
	 * @param formBuilder auto injected `FormBuilder` to handle the form validation and submition
	 * @param authService auto injected `authService` to handle the backend login communication
	 * @param popoverService auto injected `popoverService` to handle the dismission of popovers
	 * @param router auto injected `Router` to handle the redirecting to the `registered` page
	 */
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private popoverService: PopoverService,
		private router: Router) { }

	/**
	* Groups the email and password input fields with their Validators and assigns it to {@link #registrationForm}
	*/
	ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	/**
   * If the form is valid, sends a registration request to the backend via the {@link AuthService}. 
   * If the registration was successful dismisses the popover containing this component.
   * Else sets the {@link #errorMessage} to the returned error (for http status code 409) or to `Registration failed!` for other error status codes.
   */
	onSubmitRegistration() {
		// stop here if form is invalid
		if (this.registrationForm.invalid) {
			return;
		}
		const val = this.registrationForm.value;
		this.authService.register(val.email, val.password)
			.subscribe(
				data => {
					this.registrationForm.reset();
					this.popoverService.dismissPopover();
					this.router.navigate(['/registered']);
				},
				error => {
					this.registrationForm.reset();
					if (error.status === 409) {
						this.errorMessage = error.error.message;
					} else {
						this.errorMessage = 'Registration failed';
					}
				}
			);
	}
	/**
	* Dismisses the popover with data set to `openLogin`  
	*/
	presentLoginPopover() {
		this.popoverService.dismissPopover('openLogin');
	}
}
