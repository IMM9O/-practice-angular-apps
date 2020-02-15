import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { NewsResponse, Article } from 'src/models/INews';
import { NewsGatewayService } from '../network/news-gateway.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  news$: Observable<NewsResponse>;
  constructor(private _news: NewsGatewayService, private _app: AppService) {}

  ngOnInit(): void {
    this.news$ = this._news.getTopHeadlines();
  }

  setArticle(article: Article) {
    this._app.setSelectedArticle(article);
  }
}
