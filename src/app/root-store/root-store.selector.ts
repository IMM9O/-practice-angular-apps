import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppReducers } from './AppReducers';
import { Observable } from 'rxjs';
import { IUser } from 'src/models/IUser';

@Injectable()
export class RootStoreSelectors {
  constructor(private _store: Store<AppReducers>) {}

  /** selectors  */
  get users$(): Observable<IUser[]> {
    return this._store.select(reducers => reducers.userReducer);
  }
}
