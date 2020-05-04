import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class AuthModule {}
