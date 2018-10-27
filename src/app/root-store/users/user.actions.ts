import { Action } from '@ngrx/store';
import { IUser } from 'src/models/IUser';

export enum UserActionTypes {
  USERS_RECEIVED = 'USERS_RECEIVED',
  USER_RECEIVED = 'USER_RECEIVED',
  USER_UPDATED = 'USER_UPDATED',
  USER_DELETED = 'USER_DELETED',
  RESET = 'RESET'
}

export class UsersDetailsReceived implements Action {
  readonly type = UserActionTypes.USERS_RECEIVED;
  constructor(public payload: IUser[]) {}
}
export class UserDetailsReceived implements Action {
  readonly type = UserActionTypes.USER_RECEIVED;
  constructor(public payload: IUser) {}
}
export class UserUpdatedReceived implements Action {
  readonly type = UserActionTypes.USER_UPDATED;
  constructor(public payload: IUser) {}
}
export class UserDeletedReceived implements Action {
  readonly type = UserActionTypes.USER_DELETED;
  constructor(public payload: IUser) {}
}

export class Reset implements Action {
  readonly type = UserActionTypes.RESET;
}

export type UserActions =
  | UsersDetailsReceived
  | UserDetailsReceived
  | UserUpdatedReceived
  | UserDeletedReceived
  | Reset;
