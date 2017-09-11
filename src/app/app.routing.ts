import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';
import {ModuleWithProviders} from '@angular/core';
import {SigninComponent} from './admin/auth/signin/signin.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {SignoutComponent} from './admin/auth/signout/signout.component';



const APP_ROUTES: Routes = [
    {path: 'admin', component: SigninComponent},
    {path: 'admin/signout', component: SignoutComponent},
    {path: 'admin/users', component: AllUsersComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/posts', component: AllPostsComponent},
    {path: 'admin/users', component: AllUsersComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

