import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginPayload } from '../models/loginPayload.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	
	isAuth: boolean;
	isKnown = false;

	constructor (private httpClient: HttpClient) {}

	signin (signinPayload: User) {
		this.httpClient
		.post('http://localhost:3000/api/auth/signup', signinPayload)
		.subscribe(
			() => console.log('Prefect signin'),
			error => console.log('Error!!! => ' + error)
		)
	}

	login (loginPayload: LoginPayload) {
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

	updateUser (form) {
		return new Promise( (resolve, reject) => setTimeout(() => resolve(true), 2000) )
	}

}