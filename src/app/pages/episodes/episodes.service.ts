import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API_EPISODES } from 'src/app/constants';
import { IEpisodes, Result } from 'src/app/interfaces/episodes.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesServiceService {
  constructor(private http: HttpClient) {}

  getAllEpisodes(): Observable<IEpisodes> {
    return this.http.get<IEpisodes>(URL_API_EPISODES);
  }
  getEpisodeById(id: number): Observable<Result> {
    return this.http.get<Result>(`${URL_API_EPISODES}/${id}`);
  }
}
