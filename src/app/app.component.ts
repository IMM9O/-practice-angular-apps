import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  artist: any = null;

  constructor(private _spotifyService: SpotifyService, private _router: Router){
      _spotifyService.currentArtistInfo$.subscribe(res => this.artist = res);
  }

  searchEvent($event) {
     this._router.navigate(['']);
    this._spotifyService.setArtistName($event.target.value);

  }
}
