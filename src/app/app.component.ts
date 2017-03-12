import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  artist: any = null;

  constructor(private _spotifyService: SpotifyService){
      _spotifyService.currentArtistInfo$.subscribe(res => this.artist = res);
  }

  searchEvent($event) {
    this._spotifyService.setArtistName($event.target.value);

  }
}
