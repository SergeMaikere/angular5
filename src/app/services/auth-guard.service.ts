import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';	
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {

	constructor ( private authService: AuthService, private router: Router ) {  }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return this.authService.isAuth ? this.authService.isAuth : this.router.navigate(['/auth']);
	}
}


