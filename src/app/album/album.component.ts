import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any = null;

  constructor(private _route: ActivatedRoute , private _spotifyService: SpotifyService) {
       _spotifyService.currentAlubumsSongs$.subscribe( res => this.album = res );
   }

  ngOnInit() {
    this._route.params.subscribe((params: any) => this._spotifyService.setAlbumId(params.id));
  }

}
