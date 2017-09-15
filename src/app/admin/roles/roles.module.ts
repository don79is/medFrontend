import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';
import {RoleFormComponent} from './role-form/role-form.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthService} from '../auth.service';
import {RolesService} from './shared/roles.services';

@NgModule({
    declarations: [
        RolesComponent,
        RoleFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        RolesComponent
    ],
    providers: [ RolesService, AuthService],
})
export class RolesModule {
}
