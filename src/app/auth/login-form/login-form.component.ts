import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from './../../core/user.service';
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
    return this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isFiledHasError(field: string | Array<string>) {
    return this.loginForm.get(field).invalid &&
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty)
      ? 'has-error'
      : '';
  }

  isFiledHasErrorWithRule(
    field: string | Array<string>,
    ruleName: string
  ): boolean {
    if (this.loginForm.get(field).getError(ruleName)) {
      return this.loginForm.get(field).getError(ruleName)[ruleName];
    }
  }

  onSubmit() {
    const result: ICredential = Object.assign({}, this.loginForm.value);
    this._user.login(result);
  }
}
