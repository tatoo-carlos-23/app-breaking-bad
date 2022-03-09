import { Component, OnInit, Output, EventEmitter } from '@angular/core';
interface listMenuInt {
  name: string;
  ruta: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<boolean>();
  constructor() {}

  listMenu: listMenuInt[] = [
    { name: 'Go Characters', ruta: '/character' },
    { name: 'Go Deaths', ruta: '/death' },
    { name: 'Go Episodes', ruta: '/episode' },
    { name: 'Go Quotes', ruta: '/quote' },
  ];

  ngOnInit(): void {}

  closeMenuBtn() {
    this.closeMenu.emit(false);
  }
}
