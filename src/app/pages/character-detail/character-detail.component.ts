import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/character.interface';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass'],
})
export class CharacterDetailComponent {
  character: Result | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.characterService
        .getCharacterById(+characterId)
        .subscribe((response) => {
          this.character = response;
        });
    }
  }
  navigateToList(): void {
    this.router.navigate(['/characters']);
  }
}
