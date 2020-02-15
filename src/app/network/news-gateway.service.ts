import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { NewsResponse, GeopluginAPI } from 'src/models/INews';

@Injectable({
  providedIn: 'root'
})
export class NewsGatewayService {
  constructor(private _http: HttpClient) {}

  getEveryThing() {
    return this._http.get<NewsResponse>(
      `https://newsapi.org/v2/everything?q=microsoft&apiKey=${environment.api_key}`
    );
  }

  getTopHeadlines() {
    return this._http.get(`http://www.geoplugin.net/json.gp`).pipe(
      switchMap((r: GeopluginAPI) => {
        return this._http.get<NewsResponse>(
          `http://newsapi.org/v2/top-headlines?country=${r.geoplugin_countryCode}&apiKey=${environment.api_key}`
        );
      })
    );
  }
}
