import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesDetailComponent } from './pages/episodes/episodes-detail/episodes-detail.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationDetailComponent } from './pages/locations/location-detail/location-detail.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: EpisodesDetailComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: LocationDetailComponent },
  { path: '',pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
