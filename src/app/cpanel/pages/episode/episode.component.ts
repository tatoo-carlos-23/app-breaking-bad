import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/api/breaking-bad.service';
import { Episodes } from 'src/app/interfaces/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  constructor(private API: BreakingBadService) {}
  load: boolean = true;
  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.API.getAllEpisodes().subscribe((d: Episodes[]) => {
      console.log('Episodios', d);
    });
  }
}
