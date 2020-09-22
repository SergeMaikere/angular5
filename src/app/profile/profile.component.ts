import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Constantes } from '../services/constantes.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( 
    private constantes: Constantes, 
    private authService: AuthService,
    private router: Router ) { }

  lorem: string;
  @Output() authStatus: EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {
  	this.lorem = this.constantes.loremLong;
  }

  ngAfterViewChecked(): void {
    console.log('WAAAAAAAAAAAAAAAAA')
    console.log(this.authService.isAuth)
    this.authStatus.emit(this.authService.isAuth);
  }

  onSave (form: NgForm) {  
  	this.authService.updateUser(form).then( () => console.log('perfect update'));
  }

   onLogout () {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
