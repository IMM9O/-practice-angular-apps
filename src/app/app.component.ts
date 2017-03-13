import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  online$: Observable<boolean>;
  title = 'app works!';
  artist: any = null;

  constructor(private _spotifyService: SpotifyService, private _router: Router){
      _spotifyService.currentArtistInfo$.subscribe(res => this.artist = res);
      this.online$ = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').map(() => true),
        Observable.fromEvent(window, 'offline').map(() => false)
      )
  }



  searchEvent($event) {
     this._router.navigate(['']);
    this._spotifyService.setArtistName($event.target.value);

  }
}
