import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = null;
  artist: any = null;

  constructor(private _spotifyService: SpotifyService) {
    _spotifyService.currentArtistAlbums$.subscribe(res => this.albums = res);
    _spotifyService.currentArtistInfo$.subscribe( res => this.artist = res);
    _spotifyService.currentArtistInfo$.subscribe( res => console.log(res));
   }

  ngOnInit() {
  }

}
