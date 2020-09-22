import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  	this.lorem = this.constantes.loremLong;
  }

  onSave (form: NgForm) {  
  	this.authService.updateUser(form).then( () => console.log('perfect update'));
  }

   onLogout () {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
