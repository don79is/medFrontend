import { Component, OnInit } from '@angular/core';
import {BlogsService} from './shared/blogs.services';
import {Post} from './shared/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    public posts: Post[] = [];

    constructor(private blogsService: BlogsService) {
    }

    ngOnInit() {
        this.blogsService.getBlogs().subscribe(
           posts => this.posts = posts,
            (error: Response) => console.log(error),
        );
    }
}
