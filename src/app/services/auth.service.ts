import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login, Token } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	
	isAuth: boolean;
	isKnown = false;

	constructor (private httpClient: HttpClient) {}

	async signin (signinPayload: User) {
		this.httpClient
		.post('http://localhost:3000/api/auth/signup', signinPayload)
		.subscribe(
			() => console.log('Prefect signin'),
			error => console.log('Error!!! => ' + error.message)
		)
	}

	async login (login: Login) {
		this.httpClient
		.post('http://localhost:3000/api/auth/login', login)
		.subscribe(
			(data: Token) => {
				if (data) localStorage.setItem('userToken', data.token );
				this.isAuth = true;
				this.isKnown = true;
			},
			error => console.log({error})
		)
	}

	logout () {
		localStorage.removeItem('userToken');
		this.isAuth = false; 
		this.isKnown = false;
	}

	updateUser (form) {
		return new Promise( (resolve, reject) => setTimeout(() => resolve(true), 2000) )
	}
}