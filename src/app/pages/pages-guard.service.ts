import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class PagesAuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {

  }
  userAuth = false;

  canActivate() {
    return this.authService.isAuthenticated() ? true : this.router.navigate(['/auth/login']);
  }
}
