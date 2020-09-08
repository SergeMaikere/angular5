import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/observable';

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
    this.authService.emitAuthSubjectIsAuth();

    this.knownUser = this.authService.isKnown;
    this.authService.emitAuthSubjectIsKnown();
  }

  onGoToSignInForm () { 
    this.authService.isKnown = true;
    this.authService.emitAuthSubjectIsKnown();
    this.knownUser = true;
  }

}
