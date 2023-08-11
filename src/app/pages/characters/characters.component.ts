import { Component, OnInit } from '@angular/core';
import { ICharacters } from 'src/app/interfaces/character.interface';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit {
  characters: ICharacters[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService
      .getAllCharacters()
      .subscribe((characters) => (this.characters = characters));

  }
}
