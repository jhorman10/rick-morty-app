import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILocation, Result } from 'src/app/interfaces/location.interface';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.sass'],
})
export class LocationsComponent {
  locations: Result[] = [];

  constructor(private locationsService: LocationsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.locationsService.getAllLocations().subscribe((data: ILocation) => {
      this.locations = data.results;
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/location', id]);
  }
}
