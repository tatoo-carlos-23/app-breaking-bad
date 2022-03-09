import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from '../api/breaking-bad.service';
import { Characters } from '../interfaces/characters.interface';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css'],
})
export class CpanelComponent implements OnInit {
  constructor(private API: BreakingBadService) { }

  charactersList: Characters[] = [];

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.API.getAllCharacters().subscribe((d: Characters[]) => {
      this.charactersList = d
    });
  }
}
