import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	
	isAuth: boolean;
	isKnown = false;

	signin () {
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() => {
						this.isAuth = true;
						this.isKnown = true;
						resolve(true);
					},
					2000
				)
			}
		)
	}

	login () {
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() => {
						this.isAuth = true;
						this.isKnown = true;
						resolve(true);
					},
					2000
				)
			}
		)
	}

	logout () { this.isAuth = false; }

}