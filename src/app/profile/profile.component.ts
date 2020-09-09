import { Component, OnInit } from '@angular/core';
import { Constantes } from '../services/constantes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private constantes: Constantes ) { }

  lorem: string;

  ngOnInit(): void {
  	this.lorem = this.constantes.loremLong;
  }

}
