import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	
	isAuth: boolean;
	isKnown = false;

	authSubject = new Subject<boolean>();

	signin () {
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() => {
						this.isAuth = true;
						this.emitAuthSubjectIsAuth();
						this.isKnown = true;
						this.emitAuthSubjectIsKnown();
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
						this.emitAuthSubjectIsAuth();
						resolve(true);
					},
					2000
				)
			}
		)
	}

	logout () { 
		this.isAuth = false;
		this.emitAuthSubjectIsAuth();
	}

	emitAuthSubjectIsKnown () { this.authSubject.next(this.isKnown); }
	emitAuthSubjectIsAuth () { this.authSubject.next(this.isAuth); }

}