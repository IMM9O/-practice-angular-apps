import { GithubReposComponent } from './github-repos/github-repos.component';
import { SearchInstanceComponent } from './search-instance/search-instance.component';

import { GithubService } from './github.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HttpModule } from '@angular/http';

@NgModule({
  providers: [GithubService],
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, GithubProfileComponent, SearchInstanceComponent, GithubReposComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
