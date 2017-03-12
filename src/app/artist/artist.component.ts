import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = null;
  constructor(private _spotifyService: SpotifyService) {
      _spotifyService.currentArtistInfo$.subscribe( res => this.artist = res);
   }

  ngOnInit() {
  }

  

}
