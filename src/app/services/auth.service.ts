import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	
	isAuth: boolean;

	login () {
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() => {
						this.isAuth = true;
						resolve(true);
					},
					2000
				)
			}
		)
	}

	logout () { this.isAuth = false }

}