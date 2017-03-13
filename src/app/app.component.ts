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
  searchList$: Observable<any>;
  title = 'app works!';

  constructor(private _spotifyService: SpotifyService, private _router: Router){
      this.online$ = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').map(() => true),
        Observable.fromEvent(window, 'offline').map(() => false)
      )
      this.searchList$ = _spotifyService.currentArtistsList$ ;
  }



  searchNotify(name) {
     this._spotifyService.getArtistsList(name);
  }

  getItemNotify(name) {
     this._router.navigate(['']);
     this._spotifyService.setArtistName(name);
  }
}
