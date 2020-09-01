import { Component, OnInit } from '@angular/core';
import { Constantes } from '../services/constantes.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor ( private constantes: Constantes ) {  }

  loremShort: string;
  loremMedium: string;
  loremLong: string;

  ngOnInit() { 
  	this.loremShort = this.constantes.loremShort;
  	this.loremMedium = this.constantes.loremMedium;
  	this.loremLong = this.constantes.loremLong;
  }
}
	