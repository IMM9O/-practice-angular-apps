import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  // Create
  @Effect({ dispatch: false })
  created$ = this.action$.pipe(
    ofType(UserActions.UserActionTypes.USER_RECEIVED),
    map((action: UserActions.UserDetailsReceived) =>
      this.toastr.success(`User ${action.payload.first_name} Created`)
    )
  );

  // Read
  @Effect({ dispatch: false })
  userRecived$ = this.action$.pipe(
    ofType(UserActions.UserActionTypes.USERS_RECEIVED),
    map((action: UserActions.UsersDetailsReceived) =>
      this.toastr.success('New Users List add')
    )
  );

  // Update
  @Effect({ dispatch: false })
  updated$ = this.action$.pipe(
    ofType(UserActions.UserActionTypes.USER_UPDATED),
    map((action: UserActions.UserUpdatedReceived) =>
      this.toastr.success(`User ${action.payload.first_name} Updated`)
    )
  );

  // Delete
  @Effect({ dispatch: false })
  deleted$ = this.action$.pipe(
    ofType(UserActions.UserActionTypes.USER_DELETED),
    map((action: UserActions.UserDeletedReceived) =>
      this.toastr.success('User Delted')
    )
  );

  constructor(private action$: Actions, private toastr: ToastrService) {}
}
