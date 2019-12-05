import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }

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
  else return true;
}
}
