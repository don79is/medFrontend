import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {User} from '../shared/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/users.services';
import {RolesService} from '../../roles/shared/roles.services';
import {Role} from '../../roles/shared/role';
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect';


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
    userRoles: string[] = [];
    roles: Role = new Role();
  // o: IMultiSelectOption[];

    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService,
                private rolesService: RolesService) {
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
            roles: [''],
            password: ['', [
                Validators.required
            ]]
        });
    }

    ngOnInit() {
        this.rolesService.getRoles().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error),
        );
        const id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            this.title = id ? 'Edit user' : 'New user';
            if (!id)
                return;
            this.usersService.getUser(id).subscribe(
                user => {
                    this.user = user;
                    for (let i = 0, length = this.user.roles.length; i < length; i++) {
                        this.userRoles.push(this.user.roles[i].id.toString());
                    }
                }, response => {
                    if (response.status === 404) {
                        this.router.navigate(['Not Found']);
                    }
                });
        });
        if (this.router.url === '/admin/users/new') {
            this.showPassword = true;
        }
    }

    onChange(e: any) {
        console.log(e);
    }

    onSave() {
        let result = this.form.value;
        const user = this.form.value;
        console.log(user);
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
