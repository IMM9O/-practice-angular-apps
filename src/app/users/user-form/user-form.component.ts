import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Appform } from 'src/models/AppForm';
import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements Appform, OnChanges {
  userForm: FormGroup;

  @Input()
  userEdit: IUser = {};

  @Output()
  closeNotify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  updateNotify: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Output()
  createNotify: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(change: SimpleChanges) {
    this.userForm = this.createFormGroup();
  }

  createFormGroup() {
    if (this.userEdit && this.userEdit.id) {
      return this.fb.group({
        id: [this.userEdit.id],
        first_name: [this.userEdit.first_name, Validators.required],
        last_name: [this.userEdit.last_name, Validators.required]
      });
    }
    return this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }

  displayCssFor(field: string | Array<string>) {
    return this.userForm.get(field).invalid &&
      (this.userForm.get(field).touched || this.userForm.get(field).dirty)
      ? 'has-error'
      : '';
  }

  onSubmit() {
    const result: IUser = Object.assign({}, this.userForm.value);

    if (result.id) {
      this.updateNotify.emit(result);
    } else {
      this.createNotify.emit(result);
    }
    this.closeEvent();
  }

  closeEvent() {
    this.closeNotify.emit(true);
  }
}
