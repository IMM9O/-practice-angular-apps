import { Component } from '@angular/core';
import { UsersService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public userSerive: UsersService) {}
}
