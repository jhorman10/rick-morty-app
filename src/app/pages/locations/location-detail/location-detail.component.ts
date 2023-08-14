import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/location.interface';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.sass'],
})
export class LocationDetailComponent {
  location: Result | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationsService: LocationsService
  ) {}

  ngOnInit() {
    const locationId = this.route.snapshot.paramMap.get('id');
    if (locationId) {
      this.locationsService
        .getLocationById(+locationId)
        .subscribe((data: Result) => {
          this.location = data;
        });
    }
  }

  navigateToList() {
    this.router.navigate(['/locations']);
  }
}
