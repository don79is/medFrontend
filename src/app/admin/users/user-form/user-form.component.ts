import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/users.services';
import {Role} from "../../roles/shared/role";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    user: User = new User();
    showPassword: boolean;
    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService) {
        this.form = formBuilder.group({
            first_name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            last_name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            position: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            email: ['', [
                Validators.required,
            ]],
            role_id: ['roles',],
            password: ['', [
                Validators.required
            ]]
        });
    }

    ngOnInit() {
        const id = this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            this.title = id ? 'Edit user' : 'New user';
            if (!id)
                return;
            this.usersService.getUser(id)
                .subscribe(
                    user => this.user = user,
                    response => {
                        if (response.status === 404) {
                            this.router.navigate(['Not found']);
                        }
                    });
        });
        if (this.router.url === '/admin/users/new') {
            this.showPassword = true;
        }
    }

    onSave() {
        let result, user = this.form.value;
        if (this.user.id) {
            user.id = this.user.id;
            result = this.usersService.updateUser(user);
        } else {
            result = this.usersService.createUser(user);
        }
        result.subscribe(
            user => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }
}
