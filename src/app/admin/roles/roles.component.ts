import {Component, OnInit} from '@angular/core';
import {Role} from './shared/role';
import {RolesService} from './shared/roles.services';
import {Subscription} from 'rxjs/Subscription';
import {AppService} from '../../shared/app.service';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
    selector: 'app-roles',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    public roles: Role[] = [];
    subscription: Subscription;
    constructor(private rolesService: RolesService,
                private  appService: AppService) {
    }

    ngOnInit() {
        this.loadRoles();
        this.subscription = this.appService.on('roles-updated').subscribe(() => this.loadRoles());
    }
    loadRoles() {
        this.rolesService.getRoles().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error),
        );
    }

    onDelete(role) {
        if (confirm('Are you sure?' + role.first_name + '?')) {
            const index = this.roles.indexOf(role);
            this.roles.splice(index, 1);
            this.rolesService.deleteRole(role.id)
                .subscribe(null, error => {
                    alert('Could not delete role.');
                    this.roles.splice(index, 0, role);
                });
        }
    }

}
