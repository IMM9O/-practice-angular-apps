import { NgModule } from '@angular/core';
import { StoreModule as Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { RootStoreService } from './root-store.service';

// User Store
import { UserDispatchers } from './users/user.dispatchers';
import { userReducer } from './users/user.reducer';
import { RootStoreSelectors } from './root-store.selector';

const initialState = {};
export function getInitialState() {
  return initialState;
}

@NgModule({
  imports: [
    Store.forRoot(
      {
        userReducer: userReducer
      },
      { initialState: getInitialState }
    ),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 60 })
  ],
  declarations: [],
  providers: [RootStoreService, RootStoreSelectors, UserDispatchers]
})
export class RootStoreModule {}
