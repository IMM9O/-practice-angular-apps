import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Article } from 'src/models/INews';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _selectedArticle = new BehaviorSubject<Article>(null);
  public selectedArticle$ = this._selectedArticle.asObservable();

  constructor() {}

  setSelectedArticle(val: Article) {
    this._selectedArticle.next(val);
  }
}
