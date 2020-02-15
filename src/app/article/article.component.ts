import { Component, Input } from '@angular/core';
import { Article } from 'src/models/INews';
import { AppService } from '../app.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article: Article;

  constructor(private _app: AppService) {}

  resetArticle() {
    this._app.setSelectedArticle(null);
  }
}
