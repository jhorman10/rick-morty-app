import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/episodes.interface';
import { EpisodesServiceService } from '../episodes/episodes.service';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.sass'],
})
export class EpisodesDetailComponent implements OnInit {
  episode: Result | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodesServiceService: EpisodesServiceService
  ) {}
  ngOnInit(): void {
    const episodeId = this.route.snapshot.paramMap.get('id');
    if (episodeId) {
      this.episodesServiceService
        .getEpisodeById(+episodeId)
        .subscribe((response) => {
          this.episode = response;
        });
    }
  }

  navigateToList(): void {
    this.router.navigate(['/episodes']); // Ajusta la ruta según tu configuración
  }
}
