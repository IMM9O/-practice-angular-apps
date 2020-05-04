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

  @Input() userEdit: IUser = {};

  @Output() closeNotify = new EventEmitter<boolean>();
  @Output() updateNotify = new EventEmitter<IUser>();
  @Output() createNotify = new EventEmitter<IUser>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(change: SimpleChanges) {
    this.userForm = this.setFormGroup();
  }

  setFormGroup() {
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

  get firstName() {
    return this.userForm.get('first_name');
  }
  get lastName() {
    return this.userForm.get('last_name');
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
