import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from './../../core/user.service';
import { Appform } from 'src/models/AppForm';
import { ICredential } from 'src/models/ICredential';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements Appform {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: UsersService) {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  displayCssFor(field: string | Array<string>) {
    return this.loginForm.get(field).invalid &&
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty)
      ? 'has-error'
      : '';
  }

  onSubmit() {
    const result: ICredential = Object.assign({}, this.loginForm.value);
    this._user.login(result);
  }
}
