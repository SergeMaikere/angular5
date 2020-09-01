import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  	this.authStatus = this.authService.isAuth;
  }

  onLogin () {
  	this.authService.login()
  	.then( 
  		() => {
  			console.log('Perfect login');
  			this.authStatus = this.authService.isAuth;
  			this.router.navigate(['blog']);
  		}
  	)
  	.catch( error => console.log(error) )
  }

  onLogout () {
  	this.authService.logout()
	  console.log('Goddbye and dont be a stranger');
	  this.authStatus = this.authService.isAuth;
  }

}
