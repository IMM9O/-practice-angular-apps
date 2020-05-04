import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from './../../core/user.service';
import { AuthValidators } from '../auth.validators';

import { Appform } from 'src/models/AppForm';
import { ICredential } from 'src/models/ICredential';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements Appform {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: UsersService) {
    this.loginForm = this.setFormGroup();
  }

  setFormGroup() {
    return this.fb.group(
      {
        username: [
          '',
          [Validators.required, Validators.email],
          [AuthValidators.UsernameShouldBeUnique]
        ],
        password: ['', Validators.required],
        confirm: ['']
      },
      { validator: AuthValidators.MatchPassword }
    );
  }

  /** Get Form Fields Properties */
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirm() {
    return this.loginForm.get('confirm');
  }

  onSubmit() {
    const result: ICredential = Object.assign({}, this.loginForm.value);
    this._user.login(result);
  }
}
