import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit , OnDestroy{
  album: any = null;
  playUrl = '';
  audio: any = null;
  playing = false;

  constructor(private _route: ActivatedRoute , private _spotifyService: SpotifyService) {
       _spotifyService.currentAlubumsSongs$.subscribe( res => this.album = res );
   }

  ngOnInit() {
    this._route.params.subscribe((params: any) => this._spotifyService.setAlbumId(params.id));
  }

  ngOnDestroy() {
      if ( this.playing ){
        this.audio.pause();
      }
  }

  playAudio(_url: string) {
        const audio = new Audio(_url);
        if (!this.playing) {
            audio.play();
            this.playUrl = _url;
            this.audio = audio;
            this.playing = true;
        }else {
            if(_url === this.playUrl ) {
                this.audio.pause();
                this.playing = false;
            }else {
                this.audio.pause();
                audio.play();
                this.playUrl = _url;
                this.audio = audio;
                this.playing = true;
            }

        }

  }

}
