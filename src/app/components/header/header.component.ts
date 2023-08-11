import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  options = [
    { name: 'Home', url: 'home' },
    { name: 'Characters', url: 'characters' },
    { name: 'Episodes', url: 'episodes' },
    { name: 'Locations', url: 'locations' },
  ];
  activeOption = '/';

  setActiveOption(option: string) {
    this.activeOption = option;
  }
}
