import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesDetailComponent } from './pages/episodes/episodes-detail/episodes-detail.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationDetailComponent } from './pages/locations/location-detail/location-detail.component';
import { LocationsComponent } from './pages/locations/locations.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    LocationsComponent,
    CharactersComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CharacterDetailComponent,
    EpisodesDetailComponent,
    LocationDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
