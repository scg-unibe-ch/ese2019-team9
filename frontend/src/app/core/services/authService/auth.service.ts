import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';


/**
 * Authentication Service handling 
 *  - `login`,
 *  - `registration`,
 *  - `verification`,
 *  - `verification email resend`,
 *  - `forgot password`,
 *  - `reset password`
 * communication with backend
 * 
 * Sets sessionToken in `localStorage` and reads them to check the login and role of the logged in user
 */
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	/**
	 * Assigns two new private variables `httpClient` and `router`
	 * @param httpClient Auto injected `HttpClient` used for the commuication with the backend
	 * @param router Auto injected `Router` used to redirect user after logout
	 */
	constructor(private httpClient: HttpClient,
		private router: Router) { }

	/**
	 * The base Url of the backend server
	 */
	apiBaseUrl = 'https://moln-api.herokuapp.com/user';

	/**
	 * Standard Http Options for our backend requests
	 */
	httpOptions: {
		'Content-Type': 'application/json';
		observe: 'response';
	}

	/**
	 * Makes a backend request to the register endpoint. 
	 * ## Example
	 * To register a user
	 * <code>register('admin@admin.ch', '123456').subscribe(data-cb, err-cb);</code>
	 *
	 * @param email the email of the user
	 * @param password the password of the user in plaintext
	 * @return an Observable with data as {@link User} 
	 */
	register(email: string, password: string): Observable<HttpResponse<User>> {
		return this.httpClient.post<User>(this.apiBaseUrl + '/signup', { email, password }, this.httpOptions)
			.pipe(map(res => {
				this.setUser(res);
				return res;
			}));
	}

	/**
	 * 
	 * @param email 
	 * @param password 
	 */
	login(email: string, password: string): Observable<HttpResponse<User>> {
		return this.httpClient.post<User>(this.apiBaseUrl + '/login', { email, password }, this.httpOptions)
			.pipe(map(res => {
				this.setSession(res);
				return res;
			}));
	}

	verifyUser(token: string) {
		return this.httpClient.patch(this.apiBaseUrl + '/verify', { token }, { observe: 'response' });
	}

	resendEmail() {
		const id = localStorage.getItem('id');
		const email = localStorage.getItem('email');
		return this.httpClient.post(this.apiBaseUrl + '/resend', { id, email }, { observe: 'response' });
	}

	forgotPassword(email: string) {
		return this.httpClient.post(this.apiBaseUrl + '/forgot', { email }, { observe: 'response' });
	}

	resetPassword(token: string, password: string) {
		return this.httpClient.patch(this.apiBaseUrl + '/reset', { token, password }, { observe: 'response' });
	}

	private setSession(authResult) {
		localStorage.setItem('token', authResult.token);
	}

	private setUser(registrationResult) {
		localStorage.setItem('id', registrationResult.createdUser._id);
		localStorage.setItem('email', registrationResult.createdUser.email);
	}

	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['/home']);
	}

	public isLoggedIn() {
		if (!Boolean(this.getToken())) {
			return false;
		}
		const payload = decode(this.getToken());
		const expiration = payload.exp;
		const dateNow: number = Math.floor(Date.now() / 1000);
		const expired = expiration - dateNow < 0;
		if (expired) {
			localStorage.removeItem('token');
		}
		return !expired;
	}

	public isAdmin(): boolean {
		const payload = decode(this.getToken());
		return payload.admin;
	}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getId(): string {
    const payload = decode(this.getToken());
    return payload.userId;
  }
}
