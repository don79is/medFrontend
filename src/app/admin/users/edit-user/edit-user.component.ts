import {Component, OnInit} from '@angular/core';
import {User} from '../../../user.interface';
import {UserService} from '../../../user.services';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    public user: User = new User();

    constructor(private userService: UserService,
                private activateRoute: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        const params: any = this.activateRoute.snapshot.params;
        this.userService.getUser(params.id).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
    }

    public onUpdate(event: any) {
        this.userService.updateUser(this.user).subscribe(
            user => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }
}
