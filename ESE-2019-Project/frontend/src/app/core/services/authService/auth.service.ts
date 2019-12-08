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
  constructor(private httpClient: HttpClient, private router: Router) {}

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
  };

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
    return this.httpClient
      .post<User>(
        this.apiBaseUrl + '/signup',
        { email, password },
        this.httpOptions
      )
      .pipe(
        map(res => {
          this.setUser(res);
          return res;
        })
      );
  }

  /**
   * Tries to login with the given email and password
   * @param email the email of the user
   * @param password the password of the user
   * @return an Observable with data as {@link User}
   */
  login(email: string, password: string): Observable<HttpResponse<User>> {
    return this.httpClient
      .post<User>(
        this.apiBaseUrl + '/login',
        { email, password },
        this.httpOptions
      )
      .pipe(
        map(res => {
          this.setSession(res);
          return res;
        })
      );
  }

  /**
   * Verify the users email
   * @param token the token used for the verification. It is sent by email
   */
  verifyUser(token: string) {
    return this.httpClient.patch(
      this.apiBaseUrl + '/verify',
      { token },
      { observe: 'response' }
    );
  }

  /**
   * Resend the Email-Address-Verification-Email
   */
  resendEmail() {
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    return this.httpClient.post(
      this.apiBaseUrl + '/resend',
      { id, email },
      { observe: 'response' }
    );
  }

  /**
   * Send a Password reset email
   * @param email the email as a string
   */
  forgotPassword(email: string) {
    return this.httpClient.post(
      this.apiBaseUrl + '/forgot',
      { email },
      { observe: 'response' }
    );
  }

  /**
   * Resets a password of the user
   * @token the token sent for validation
   * @password the new password
   */
  resetPassword(token: string, password: string) {
    return this.httpClient.patch(
      this.apiBaseUrl + '/reset',
      { token, password },
      { observe: 'response' }
    );
  }

  /**
   * Sets the token to the localStorage
   */
  private setSession(authResult) {
    localStorage.setItem('token', authResult.token);
  }

  /**
   * sets the non-verified-user to the localStorage.
   */
  private setUser(registrationResult) {
    localStorage.setItem('id', registrationResult.createdUser._id);
    localStorage.setItem('email', registrationResult.createdUser.email);
  }

  /**
   * Removes the token with which a user is logged in and navigates the user to the homepage
   */
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  /**
   * Checks if the user is logged in. Only checks frontend-side
   * @return the boolean if the user is logged in
   */
  public isLoggedIn(): boolean {
    try {
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
    } catch (err) {
      return false;
    }
  }

  /**
   * Checks if the user is an Admin. Only checks frontend-side
   * @returns a boolean if the user is admin
   */
  public isAdmin(): boolean {
    if (!Boolean(this.getToken())) {
      return false;
    }
    try {
      const payload = decode(this.getToken());
      return payload.admin;
    } catch (err) {
      return false;
    }
  }

  /**
   * Reads and returns the token from the localStorage
   * @returns the token in the localStorage or null if it doesn't exist
   */
  public getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Reads the userId from the decoded token, which is saved in the localStorage
   * @returns the userId as a string
   */
  public getId(): string {
    if (!Boolean(this.getToken())) {
      return null;
    }
    const payload = decode(this.getToken());
    return payload.userId;
  }
}
