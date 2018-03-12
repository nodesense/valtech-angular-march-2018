import { Injectable } from '@angular/core';
import { CanActivate, 
          ActivatedRouteSnapshot,
          Router,  
          RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, 
             private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.authService.isAuthenticated()) {
        return true;
      }

      console.log("you are visiting ", state.url);

      this.router.navigateByUrl('/login');

      return false;

  }
}
