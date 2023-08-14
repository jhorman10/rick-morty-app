import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  title: string = 'Welcome to the Rick and Morty Application';
  description: string = `Explore the world of Rick and Morty with our app! Here you can
  access information about characters, locations and episodes of the series.
  Simply choose one of the following options to get started:`;

  characterTitle: string = 'Characters';
  characterDesc: string =
    'Discover detailed information about the characters in the series.';
  characterLink: string = 'Explore Characters';

  locationTitle: string = 'Locations';
  locationDesc: string =
    'Explore the various locations featured in the series.';
  locationLink: string = 'Explore Locations';

  episodeTitle: string = 'Episodes';
  episodeDesc: string =
    'Access the complete list of episodes and their information.';
  episodeLink: string = 'Explore Episodes';
}
