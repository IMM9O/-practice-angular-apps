import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SpotifyService {

  private BASE_URL = 'https://api.spotify.com';

  private _currentArtistName: BehaviorSubject<string> = new BehaviorSubject(null);
  private currentArtistName$: Observable<string> = this._currentArtistName.asObservable();

  private _currentArtistId: BehaviorSubject<string> = new BehaviorSubject(null);
  private currentArtistId$: Observable<string> = this._currentArtistId.asObservable();

  private _currentAlbumId: BehaviorSubject<string> = new BehaviorSubject(null);
  private currentAlbumId$: Observable<string> = this._currentAlbumId.asObservable();

  private _currentArtistInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentArtistInfo$: Observable<any> = this._currentArtistInfo.asObservable();

  private _currentArtistAlbums: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentArtistAlbums$: Observable<any> = this._currentArtistAlbums.asObservable();

  private _currentAlubumsSongs: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentAlubumsSongs$: Observable<any> = this._currentAlubumsSongs.asObservable();

  private _currentArtistsList: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public currentArtistsList$: Observable<any[]> = this._currentArtistsList.asObservable();

  constructor(private _http: Http) {
      this.currentArtistName$.subscribe( res =>{
          if (res && res.length > 0 ) {
            this.getArtistInfo(res);
          }
      });

      this.currentArtistId$.subscribe(res => {
          if ( res && res.length > 0 ){
            this.getArtistAlbums(res);
          }
      });

      this.currentAlbumId$.subscribe(res => {
        if (res && res.length > 0 ){
            this.getAlbumSongs(res);
        }
      })
   }

  setArtistName(_name: string){
    this._currentArtistName.next(_name);
  }

  setAlbumId(_id: string){
    this._currentAlbumId.next(_id);
  }

  getArtistsList(name: string){
     if (name && name.length > 0 ){
        const FEATCH_URL =`${this.BASE_URL}/v1/search?q=${name}&type=artist&limit=5`;
        this._http.get(FEATCH_URL).subscribe(res => {
            if ( res.json().artists.items && res.json().artists.items.length > 0 ){
              this._currentArtistsList.next(res.json().artists.items);
            } else {
                this._currentArtistsList.next([]);
            }
        });
     } else {
        this._currentArtistsList.next([]);
     }
  }
  getArtistInfo(name: string){
      this._currentArtistsList.next([]);
      const FEATCH_URL =`${this.BASE_URL}/v1/search?q=${name}&type=artist&limit=1`;
      this._http.get(FEATCH_URL).subscribe(res => {
          if ( res.json().artists.items[0] ){
            this._currentArtistInfo.next(res.json().artists.items[0]);
            this._currentArtistId.next(res.json().artists.items[0].id);
          }
      });
  }

  getArtistAlbums(id: string){
      const FEATCH_URL =`${this.BASE_URL}/v1/artists/${id}/albums`;
      this._http.get(FEATCH_URL).subscribe(res => {
          this._currentArtistAlbums.next(res.json());
      });
  }

  getAlbumSongs(id: string){
      const FEATCH_URL =`${this.BASE_URL}/v1/albums/${id}`;
      this._http.get(FEATCH_URL).subscribe(res => {
          this._currentAlubumsSongs.next(res.json());
      });
  }

}
