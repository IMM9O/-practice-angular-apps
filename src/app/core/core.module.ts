import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StorageService } from './storage.service';
import { UsersService } from './user.service';


@NgModule({
  imports: [HttpClientModule],
  providers: [StorageService, UsersService],
})
export class CoreModule { }
