import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDeleteComponent {
  @Input()
  userEdit: IUser = {};

  @Output()
  closeNotify: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  deleteNotify: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor() {}

  deleteEvent() {
    this.deleteNotify.emit(this.userEdit);
    this.closeEvent();
  }
  closeEvent() {
    this.closeNotify.emit(true);
  }
}
