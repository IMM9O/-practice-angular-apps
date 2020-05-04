import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { COUNTRIES } from 'src/models/Countries';

@Component({
  selector: 'app-selector-input-countries',
  templateUrl: './selector-input-countries.component.html',
  styleUrls: ['./selector-input-countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorInputCountriesComponent {
  /**
   * 'fieldId' is a unique field identification
   * Example: 'email', 'password'
   *    ---REQUIRED PROPERTY---
   */
  @Input() isInline = false;
  @Input() filedLabel = 'Select your Country';
  /**
   * 'control' is a reactive form validator/value controller
   *    ---REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;
  countryOptions = COUNTRIES;
}
