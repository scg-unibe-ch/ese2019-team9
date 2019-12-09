import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../authService/auth.service';

/**
 * Roleguard for admin only pages.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate{

  /**
   * Assings two new private variables
   * @param auth Auto injected AuthService to check the users role
   * @param router Auto injected Router to redirect non allowed users
   */
  constructor(public auth: AuthService, public router: Router) { }

  /**
   * Checks whether a user is logged in and if he has the expected role. Redirects user to '/home' if the role is not matched
   * @param route the route with the expectedRole on the data attribute
   * @returns a boolean whether a user should be able to visit the given route
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    if (expectedRole === 'admin'){
    if (!this.auth.isAdmin()){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
}
