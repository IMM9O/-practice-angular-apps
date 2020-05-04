import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UsersComponent, UserDetailComponent, UserFormComponent, UserDeleteComponent],
  exports: [UsersComponent, UserDetailComponent]
})
export class UsersModule {}
