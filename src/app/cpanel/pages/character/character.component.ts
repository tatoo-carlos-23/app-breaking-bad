import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/api/breaking-bad.service';
import { Characters } from 'src/app/interfaces/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  constructor(private API: BreakingBadService) {}

  charactersList: Characters[] = [];
  load: boolean = true;
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.load = true;
    this.API.getAllCharacters().subscribe((d: Characters[]) => {
      this.load = false;
      this.charactersList = d;
    });
  }

  getOne() {
    this.API.getAllCharactersOne(3).subscribe((d: Characters[]) => {
      console.log('Uno: ', d[0]);
    });
  }
}
