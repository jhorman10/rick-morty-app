import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/episodes.interface';
import { EpisodesServiceService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass'],
})
export class EpisodesComponent implements OnInit {
  episodes: Result[] = [];

  constructor(
    private episodesServiceService: EpisodesServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.episodesServiceService.getAllEpisodes().subscribe((response) => {
      this.episodes = response.results;
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/episode', id]);
  }
}
