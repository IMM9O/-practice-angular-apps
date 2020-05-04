import { IGithubUser } from './IGithubUser.json';
import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUserInfo$: Observable<IGithubUser>;
  currentUserRepos$: Observable<any>;

  constructor(private _githubService: GithubService) {
    this.currentUserInfo$ = _githubService.currentUserInfo$;
    this.currentUserRepos$ = _githubService.currentUserRepos$;
  }

  searchNotify(searchKeyword: string) {
    this._githubService.setUserName(searchKeyword);
  }

}
