import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AppService } from '../app.service';
import { NewsGatewayService } from '../network/news-gateway.service';

import { Source } from 'src/models/INews';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private _news: NewsGatewayService, public app: AppService) {}

  ngOnInit(): void {
    this.app.news$ = this._news.getTopHeadlines(null, 'bbc-news');
    this.searchForm = new FormGroup({
      term: new FormControl(''),
      source: new FormControl('bbc-news'),
      country: new FormControl(''),
      start: new FormControl(''),
      end: new FormControl('')
    });

    this.searchForm
      .get('term')
      .valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(m => (this.app.news$ = this._news.getTopHeadlines(m)));

    this.searchForm
      .get('source')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe(v => (this.app.news$ = this._news.getTopHeadlines(null, v)));

    this.searchForm
      .get('country')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe(
        v => (this.app.news$ = this._news.getTopHeadlines(null, null, v))
      );
  }

  TrackByFunction(index, item: Source) {
    return item.id;
  }
}
