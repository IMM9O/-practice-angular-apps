import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UserMethods from './user.actions';
import { AppReducers } from '../AppReducers';
import { IUser } from 'src/models/IUser';

@Injectable()
export class UserDispatchers {
  constructor(private _store: Store<AppReducers>) {}

  /** Dispacth actions */
  usersDetailsReceived(payload: IUser[]): void {
    this._store.dispatch(new UserMethods.UsersDetailsReceived(payload));
  }
  userDetailsReceived(payload: IUser): void {
    this._store.dispatch(new UserMethods.UserDetailsReceived(payload));
  }
  userUpdatedRecived(payload: IUser): void {
    this._store.dispatch(new UserMethods.UserUpdatedReceived(payload));
  }
  userDeletedRecived(payload: IUser): void {
    this._store.dispatch(new UserMethods.UserDeletedReceived(payload));
  }
  resetUserStore() {
    this._store.dispatch(new UserMethods.Reset());
  }
}
