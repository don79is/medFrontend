import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';
import {ModuleWithProviders} from '@angular/core';
import {SigninComponent} from './admin/auth/signin/signin.component';



const APP_ROUTES: Routes = [
    {path: 'admin', component: SigninComponent},
    {path: 'admin/users', component: AllUsersComponent},
    {path: 'admin/dashboard', component: AllUsersComponent},
    {path: 'admin/posts', component: AllPostsComponent},
    {path: 'admin/dashboard', component: AllPostsComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

