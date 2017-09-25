import {Component, OnInit} from '@angular/core';
import {User} from './shared/user';
import {UsersService} from './shared/users.services';
import {fadeInAnimation} from '../../animations/fade-in.animation';
import {AppService} from '../../shared/app.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-users',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    subscription: Subscription;
    constructor(private usersService: UsersService,
    private  appService: AppService) {
    }

    ngOnInit() {
        this.loadUsers();
        // this.usersService.getUsers().subscribe(
        //     users => this.users = users,
        //     (error: Response) => console.log(error),
        // );
        this.subscription = this.appService.on('users-updated').subscribe(() => this.loadUsers());
    }
    loadUsers() {
        this.usersService.getUsers().subscribe(
            users => this.users = users,
            (error: Response) => console.log(error),
        );
    }

    onDelete(user) {
        if (confirm('Are you sure?' + user.first_name + '?')) {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this.usersService.deleteUser(user.id)
                .subscribe(null, error => {
                    alert('Could not delete user.');
                    this.users.splice(index, 0, user);
                });
        }
    }
}
