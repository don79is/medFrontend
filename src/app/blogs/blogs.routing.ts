import {RouterModule, Routes} from '@angular/router';


import {BlogsComponent} from './blogs.component';
import {BlogPostsComponent} from './blog-posts/blog-posts.component';


const blogsRoutes: Routes = [
    { path: 'blog', component: BlogsComponent},
    {path: 'blog/:id', component: BlogPostsComponent},
];

export const blogsRouting  = RouterModule.forChild(blogsRoutes);

