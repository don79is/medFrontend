import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../user.services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService ) { }

  ngOnInit() {
  }
  onCreate(form: NgForm) {
    this.userService.createUser(
        form.value.first_name,
        form.value.last_name,
        form.value.email,
        form.value.position,
        form.value.password,
        form.value.role_id,
    ).
    subscribe(
        response => this.router.navigate(['admin/users']),
        error => console.log('error')
    );
  }

}
