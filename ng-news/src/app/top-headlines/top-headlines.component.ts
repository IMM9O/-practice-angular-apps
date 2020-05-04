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
  constructor(private _news: NewsGatewayService, public app: AppService) {}

  ngOnInit(): void {
    // this.app.news$ = this._news.getTopHeadlines();
  }

  setArticle(article: Article) {
    this.app.setSelectedArticle(article);
  }

  TrackByFunction(index, item: Article) {
    return item.title;
  }
}
