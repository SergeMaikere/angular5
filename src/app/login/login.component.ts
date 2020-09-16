import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  authStatus: boolean;
  knownUser: boolean;

  ngOnInit(): void {
  	this.authStatus = this.authService.isAuth;
  	this.knownUser = this.authService.isKnown;
  }

  onLogin (form: NgForm) {
    const loginPayload = { email: form.value['email'], password: form.value['password'] }
  	this.authService.login(loginPayload)
  	.then( 
  		() => {
  			console.log('Perfect login');
  			this.router.navigate(['blog']);
  		}
  	)
  	.catch( error => console.log(error) )
  }

  onLogout () {
  	this.authService.logout()
	  console.log('Goddbye and dont be a stranger');
  }

}
