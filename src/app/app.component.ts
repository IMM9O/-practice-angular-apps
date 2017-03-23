import { IGithubUser } from './IGithubUser.json';
import { Component } from '@angular/core';
import {GithubService} from './github.service';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'my-app',
  template: `<h1>
  
  Hello {{name}}

  </h1>
  <body>
    <github-profile 
      [currentUserData]='currentUserInfo$ | async' 
      [currentUserRepos]='currentUserRepos$ | async' 
      (searchNotify)='searchNotify($event)' 
    >
    </github-profile>
  </body>`,
})
export class AppComponent {
    name = 'Angular 2+ Github Search Users ';

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
