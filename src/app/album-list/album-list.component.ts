import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from './../spotify.service';
import { Observer } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums$: Observable<any>;
  artist$: Observable<any>;

  constructor(private _spotifyService: SpotifyService) {
    this.albums$ = _spotifyService.currentArtistAlbums$;
    this.artist$ =  _spotifyService.currentArtistInfo$;
   }

  ngOnInit() {
  }

}
