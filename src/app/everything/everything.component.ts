import { Component, OnInit } from '@angular/core';
import { NewsGatewayService } from '../network/news-gateway.service';
import { Observable } from 'rxjs';
import { NewsResponse, Article } from 'src/models/INews';
import { AppService } from '../app.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {
  news$: Observable<NewsResponse>;
  constructor(private _news: NewsGatewayService, private _app: AppService) {}

  ngOnInit(): void {
    this.news$ = this._news.getEveryThing();
  }

  setArticle(article: Article) {
    this._app.setSelectedArticle(article);
  }
}
