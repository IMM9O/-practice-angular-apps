import { IGithubUser } from './IGithubUser.json';
import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  template: `<h1>
  
  Hello {{name}}

  </h1>
  <body>
    <github-profile [currentUserData]='currentUserData' (searchNotify)='searchNotify($event)' ></github-profile>
  </body>`,
})
export class AppComponent {
  name = 'Angular 2+ Github Search Users ';

  currentUserData: IGithubUser = null;

  constructor(private _githubService: GithubService) {
    this._githubService.currentUserData$.subscribe(res => this.currentUserData = res);

  }

  searchNotify(searchKeyword: string) {
    this._githubService.setUserName(searchKeyword);
  }

}
