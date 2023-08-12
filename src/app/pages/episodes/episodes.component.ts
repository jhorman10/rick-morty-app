import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/episodes.interface';
import { EpisodesServiceService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass'],
})
export class EpisodesComponent implements OnInit {
  episodes: Result[] = [];

  constructor(private episodesServiceService: EpisodesServiceService) {}

  ngOnInit() {
    this.episodesServiceService.getAllEpisodes().subscribe((response) => {
      this.episodes = response.results;
    });
  }
}
