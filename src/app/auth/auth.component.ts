import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  knownUser: boolean;



  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  	this.authStatus = this.authService.isAuth;
    this.knownUser = this.authService.isKnown;
  }

  onGoToSignInForm () { 
    this.authService.isKnown = true;
    this.knownUser = true;
  }

  authStatusHandler (bool) { this.authStatus = bool; }

  knownUserHandler (bool) { this.knownUser = bool; }

}
