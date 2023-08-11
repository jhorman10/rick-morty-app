import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICharacters } from 'src/app/interfaces/character.interface';
import { URL_API_CHARACTERS } from '../../constants';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ICharacters[]> {
    return this.http
      .get<ICharacters[]>(URL_API_CHARACTERS)
      .pipe(map((res) => res as ICharacters[]));
  }
}
