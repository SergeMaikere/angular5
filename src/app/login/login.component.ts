import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() authStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {

  }

  onLogin (form: NgForm) {
    const loginPayload = { email: form.value['email'], password: form.value['password'] }
  	this.authService.login(loginPayload)
  	.then( 
      () => {
        this.authStatus.emit(this.authService.isAuth);
        this.router.navigate(['blog']) 
      }
    )
  	.catch( error => console.log(error) )
  }
}
