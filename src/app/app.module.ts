import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { EverythingComponent } from './everything/everything.component';

import { AppRoutingModule } from './app-routing.module';
import { NetworkModule } from './network/network.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    NetworkModule
  ],
  declarations: [
    AppComponent,
    EverythingComponent,
    TopHeadlinesComponent,
    SearchFormComponent,
    ArticleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
