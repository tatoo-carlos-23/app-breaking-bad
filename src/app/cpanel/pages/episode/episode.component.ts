import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/api/breaking-bad.service';
import { ICONS } from 'src/app/icons/icons';
import { Episodes } from 'src/app/interfaces/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  ICON:any = ICONS
  constructor(private API: BreakingBadService) {}
  load: boolean = true;
  episodesList: Episodes[] = [];
  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.load = true
    this.API.getAllEpisodes().subscribe((d: Episodes[]) => {
      this.load = false
      console.log('Episodios', d);
      this.episodesList = d;
    });
  }
}
