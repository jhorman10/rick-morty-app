import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/character.interface';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit {
  characters: Result[] = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.charactersService.getAllCharacters().subscribe((response) => {
      this.characters = response.results;
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/character', id]);
  }
}
