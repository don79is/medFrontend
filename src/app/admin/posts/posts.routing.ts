import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from '../auth-guard.service';
import {PostsComponent} from './posts.component';
import {PostFormComponent} from './post-form/post-form.component';

const usersRoutes: Routes = [
    {
        path: 'admin/posts', component: PostsComponent,
        children: [
            {path: 'new', component: PostFormComponent},
            {path: 'edit/:id', component: PostFormComponent},
        ],
        canActivate: [AuthGuardService]
    },
    // {path: '**', redirectTo: '/admin/users'}
];

export const postsRouting = RouterModule.forChild(usersRoutes);

