import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
  @Input()
  user: IUser;

  @Output()
  closeNotify: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  updateNotify: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Output()
  deleteNotify: EventEmitter<IUser> = new EventEmitter<IUser>();

  closeEvent() {
    this.closeNotify.emit(true);
  }

  updateEvent() {
    this.updateNotify.emit(this.user);
  }

  deleteEvent() {
    this.deleteNotify.emit(this.user);
    this.closeNotify.emit(true);
  }
}
