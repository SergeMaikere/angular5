import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSignIn () {
  	this.authService.signin()
  	.then( 
  		() => {
  			console.log('Perfect sign-in');
  			this.router.navigate(['blog']);
  		}
  	)
  	.catch( error => console.log(error) )
  }

  onGoBack () { this.authService.isKnown = false; }

}
