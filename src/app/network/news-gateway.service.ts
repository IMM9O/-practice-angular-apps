import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { NewsResponse, GeopluginAPI, SourcesResponse } from 'src/models/INews';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsGatewayService {
  constructor(private _http: HttpClient) {}

  getEveryThing(searchTerm: string) {
    return this._http.get<NewsResponse>(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${environment.api_key}`
    );
  }

  getTopHeadlines(term?: string, source?: string, country?: string) {
    return this._http.get<NewsResponse>(`http://newsapi.org/v2/top-headlines`, {
      params: this.setPrams(term, source, country)
    });
  }

  getSourcesList() {
    return this._http
      .get<SourcesResponse>(
        `http://newsapi.org/v2/sources?apiKey=${environment.api_key}`
      )
      .pipe(map(r => r.sources));
  }

  setPrams(
    q?: string,
    sources?: string,
    country?: string,
    from?: string,
    to?: string
  ) {
    console.log(q);
    let params = new HttpParams();
    if (q) {
      params = params.append('q', q);
    }
    if (sources) {
      params = params.append('sources', sources);
    }
    if (country) {
      params = params.append('country', country);
    }
    if (from) {
      params = params.append('from', from);
    }
    if (to) {
      params = params.append('to', to);
    }

    params = params.append('apiKey', environment.api_key);

    console.log(params);
    return params;
  }
}
