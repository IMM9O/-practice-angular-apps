import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveSelectInputComponent } from './reactive-select-input/reactive-select-input.component';
import { SelectorInputCountriesComponent } from './selector-input-countries/selector-input-countries.component';
import { SelectorInputSourcesComponent } from './selector-input-sources/selector-input-sources.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    ReactiveSelectInputComponent,
    SelectorInputCountriesComponent,
    SelectorInputSourcesComponent
  ],
  exports: [
    ReactiveSelectInputComponent,
    SelectorInputCountriesComponent,
    SelectorInputSourcesComponent
  ]
})
export class SharedModule {}
