import { GithubService } from './github.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubProfileComponent } from './githubProfile/github-profile.component';
import { HttpModule } from '@angular/http';

@NgModule({
  providers: [GithubService],
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, GithubProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
