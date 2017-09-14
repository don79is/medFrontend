import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AuthService} from '../auth.service';


import {UsersService} from './shared/users.services';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form/user-form.component';


@NgModule({
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
       UsersComponent
    ],
    providers: [ UsersService, AuthService],
})
export class UsersModule {
}
