import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { MatchingPasswordError } from '../validators/matchingPasswordError.validator';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

	@Output() authStatus: EventEmitter<boolean> = new EventEmitter();
	@Output() knownUser: EventEmitter<boolean> = new EventEmitter();

  userForm: FormGroup;

  constructor( 
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm () {
    this.userForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: MatchingPasswordError('password', 'confirmPassword') }
    )
  }

  get f () { return this.userForm.controls }

  onSignIn () {

    const formValue = this.userForm.value;
    const signinPayload: User = {
      username: formValue['username'],
      email: formValue['email'],
      password: formValue['password']
    } 

  	this.authService.signin(signinPayload)
  	.then( 
  		() => {
        this.authService.isKnown = false;

  			this.authStatus.emit(this.authService.isAuth);
  			this.knownUser.emit(this.authService.isKnown);


  			this.router.navigate(['auth']);
  		}
  	)
  	.catch( error => console.log(error) )
  }

  onGoBack () { 
  	this.authService.isKnown = false;
  	this.knownUser.emit(this.authService.isKnown);
  }

}
