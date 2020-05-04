import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { RootStoreService } from './root-store.service';

// User Store
import { UserEffects } from './users/user.effects';
import { UserDispatchers } from './users/user.dispatchers';
import { userReducer } from './users/user.reducer';
import { RootStoreSelectors } from './root-store.selector';

const initialState = {};
export function getInitialState() {
  return initialState;
}

@NgModule({
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    StoreModule.forRoot(
      {
        userReducer: userReducer
      },
      { initialState: getInitialState }
    ),
    EffectsModule.forRoot([UserEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 60 })
  ],
  declarations: [],
  providers: [RootStoreService, RootStoreSelectors, UserDispatchers]
})
export class RootStoreModule {}
