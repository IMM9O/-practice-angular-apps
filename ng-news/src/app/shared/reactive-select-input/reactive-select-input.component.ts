import {
  Component,
  ChangeDetectionStrategy,
  DoCheck,
  Input
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IOption } from 'src/models/IOption';

@Component({
  selector: 'app-reactive-select-input',
  templateUrl: './reactive-select-input.component.html',
  styleUrls: ['./reactive-select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveSelectInputComponent implements DoCheck {
  /**
   * 'fieldId' is a unique field identification
   * Example: 'email', 'password'
   *    ---REQUIRED PROPERTY---
   */
  @Input() isInline = false;
  @Input() showError = true;
  @Input() fieldId: string;
  @Input() filedLabel: string;

  @Input() options: string[];
  @Input() keyOptions: IOption[];
  @Input() disabled = false;

  /**
   * 'control' is a reactive form validator/value controller
   *    ---REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;

  private _validationErrors = new BehaviorSubject<object>(null);
  public validationErrors$ = this._validationErrors.asObservable();

  ngDoCheck() {
    if (this.control && this.control.touched && this.control.invalid) {
      this._validationErrors.next(this.control['errors']);
    } else {
      this._validationErrors.next(null);
    }
  }
}
