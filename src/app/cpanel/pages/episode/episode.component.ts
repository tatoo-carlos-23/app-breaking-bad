import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/api/breaking-bad.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  constructor(private API: BreakingBadService) {}

  ngOnInit(): void {
    this.getEpisodes()
  }

  getEpisodes() {
    this.API.getAllEpisodes().subscribe((d: any) => {
      console.log(d);
    });
  }
}
