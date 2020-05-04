import { Action } from '@ngrx/store';
import { IUser } from 'src/models/IUser';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UserActionTypes {
  USERS_RECEIVED = 'USERS_RECEIVED',
  USER_RECEIVED = 'USER_RECEIVED',
  USER_UPDATED = 'USER_UPDATED',
  USER_DELETED = 'USER_DELETED',
  RESET = 'RESET'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */

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
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserActions =
  | UsersDetailsReceived
  | UserDetailsReceived
  | UserUpdatedReceived
  | UserDeletedReceived
  | Reset;
