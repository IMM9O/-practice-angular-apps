import { IGithubUser } from './IGithubUser.json';
import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  template: `<h1>
  
  Hello {{name}}
  
  <github-profile [currentUserData]='currentUserData' (searchNotify)='searchNotify($event)' ></github-profile>
  
  </h1>`,
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
