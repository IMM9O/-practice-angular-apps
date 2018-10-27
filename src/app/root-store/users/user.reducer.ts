import * as UserActions from './user.actions';
import { IUser } from 'src/models/IUser';
import { UserMiddleware } from './user.middleware';

export function userReducer(
  state: IUser[] = [],
  action: UserActions.UserActions
): IUser[] {
  switch (action.type) {
    case UserActions.UserActionTypes.USERS_RECEIVED:
      return [...state, ...action.payload];
    case UserActions.UserActionTypes.USER_RECEIVED:
      return [action.payload, ...state];
    case UserActions.UserActionTypes.USER_UPDATED:
      return UserMiddleware.updateItem(state, action.payload);
    case UserActions.UserActionTypes.USER_DELETED:
      return UserMiddleware.removeItem(state, action.payload);
    case UserActions.UserActionTypes.RESET:
      return [];
    default:
      return state;
  }
}
