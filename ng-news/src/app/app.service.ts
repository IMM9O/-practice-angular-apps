import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Article, NewsResponse } from 'src/models/INews';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _selectedArticle = new BehaviorSubject<Article>(null);
  public selectedArticle$ = this._selectedArticle.asObservable();
  news$: Observable<NewsResponse>;

  constructor() {}

  setSelectedArticle(val: Article) {
    this._selectedArticle.next(val);
  }
}
