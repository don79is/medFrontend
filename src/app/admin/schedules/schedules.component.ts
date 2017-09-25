import { Component, OnInit } from '@angular/core';
import {User} from '../users/shared/user';
import {UsersService} from '../users/shared/users.services';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
  selector: 'app-schedules',
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''},
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  public users: User[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    return this.usersService.getUsers().subscribe(
        users => this.users = users,
        (error: Response) => console.log(error),
    );
  }

}
