import {RouterModule, Routes} from '@angular/router';


import {BlogsComponent} from './blogs.component';


const blogsRoutes: Routes = [
    { path: 'blog', component: BlogsComponent},
];

export const blogsRouting  = RouterModule.forChild(blogsRoutes);

