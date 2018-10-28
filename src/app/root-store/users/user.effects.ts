import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';

import * as UserActions from './user.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  // Create
  @Effect({ dispatch: false })
  created$ = this.action$
    .ofType(UserActions.UserActionTypes.USER_RECEIVED)
    .pipe(
      map((action: UserActions.UserDetailsReceived) =>
        this.toastr.success(`User ${action.payload.first_name} Created`)
      )
    );

  // Read
  @Effect({ dispatch: false })
  userRecived$ = this.action$
    .ofType(UserActions.UserActionTypes.USERS_RECEIVED)
    .pipe(
      map((action: UserActions.UsersDetailsReceived) =>
        this.toastr.success('New Users List add')
      )
    );

  // Update
  @Effect({ dispatch: false })
  updated$ = this.action$
    .ofType(UserActions.UserActionTypes.USER_UPDATED)
    .pipe(
      map((action: UserActions.UserUpdatedReceived) =>
        this.toastr.success(`User ${action.payload.first_name} Updated`)
      )
    );

  // Delete
  @Effect({ dispatch: false })
  deleted$ = this.action$
    .ofType(UserActions.UserActionTypes.USER_DELETED)
    .pipe(
      map((action: UserActions.UserDeletedReceived) =>
        this.toastr.success('User Delted')
      )
    );

  constructor(private action$: Actions, private toastr: ToastrService) {}
}
