import { Component, OnInit } from '@angular/core';
import { ICONS } from '../icons/icons';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css'],
})
export class CpanelComponent implements OnInit {
  ICON: any = ICONS;
  constructor() {}

  openClose: boolean = false;
  faCoffee = this.ICON.faSmoking;

  ngOnInit(): void {}

  openCloseMenu(value:boolean){
    console.log(value);
    
    this.openClose = value
  }
}
