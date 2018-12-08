import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from './../../core/user.service';
import { Appform } from 'src/models/AppForm';
import { ICredential } from 'src/models/ICredential';
import { AuthValidators } from '../auth.validators';

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
      username: [
        '',
        [Validators.required, Validators.email],
        [AuthValidators.emailShouldBeUnique]
      ],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const result: ICredential = Object.assign({}, this.loginForm.value);
    this._user.login(result);
  }
}
