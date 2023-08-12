import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation, Result } from 'src/app/interfaces/location.interface';
import { URL_API_LOCATIONS } from '../../constants/index';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<ILocation> {
    return this.http.get<ILocation>(URL_API_LOCATIONS);
  }

  getLocationById(id: number): Observable<Result> {
    const url = `${URL_API_LOCATIONS}/${id}`;
    return this.http.get<Result>(url);
  }
}
