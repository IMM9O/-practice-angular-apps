import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import { AlbumListComponent } from './album-list/album-list.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'album/:id',
    component: AlbumComponent
  }, {
    path: 'artist/:id',
    component: ArtistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, ArtistComponent, AlbumComponent, AboutComponent, AlbumListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}