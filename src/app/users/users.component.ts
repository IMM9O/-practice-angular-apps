import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { UsersService } from '../core/user.service';
import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  @Input()
  users: IUser[];

  selectedUser: IUser = null;
  updateedUser: IUser = null;
  deletedUser: IUser = null;

  constructor(public userService: UsersService) {}

  selectUser(user: IUser) {
    this.selectedUser = user;
  }

  createUser() {
    this.updateedUser = {};
  }
  updateUser(event: MouseEvent, user: IUser) {
    if (event) {
      event.stopPropagation();
    }
    this.updateedUser = user;
  }

  deleteUser(event: MouseEvent, user: IUser) {
    if (event) {
      event.stopPropagation();
    }
    this.deletedUser = user;
  }

  resetSelectedUser() {
    this.selectedUser = null;
  }

  closeEditMode() {
    this.updateedUser = null;
  }

  closeDeleteMode() {
    this.deletedUser = null;
  }

  TrackByFunction(index: number, item: IUser) {
    return item.id;
  }
}
