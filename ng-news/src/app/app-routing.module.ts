import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EverythingComponent } from './everything/everything.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
  {
    path: 'news',
    component: EverythingComponent,
    data: { title: 'News' }
  },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'headlines',
    component: TopHeadlinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {}
