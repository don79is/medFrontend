import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './auth/signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [
        NavBarComponent,
        SigninComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        NavBarComponent, SigninComponent
    ],
    providers: [AuthService, AuthGuardService],
})
export class AdminModule {
}
