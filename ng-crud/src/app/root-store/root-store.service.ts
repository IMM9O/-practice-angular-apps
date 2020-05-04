import { Injectable } from '@angular/core';

import { IUser } from 'src/models/IUser';
import { UserDispatchers } from './users/user.dispatchers';

@Injectable()
export class RootStoreService {
  constructor(private _userDispacthers: UserDispatchers) {}

  usersRecived(users: IUser[]) {
    this._userDispacthers.usersDetailsReceived(users);
  }
  userRecived(user: IUser) {
    this._userDispacthers.userDetailsReceived(user);
  }
  userUpdatedRecived(user: IUser) {
    this._userDispacthers.userUpdatedRecived(user);
  }
  userDeletedRecived(user: IUser) {
    this._userDispacthers.userDeletedRecived(user);
  }
  resetStore() {
    this._userDispacthers.resetUserStore();
  }
}
