import { Component, OnInit } from '@angular/core';
import {BlogsService} from './shared/blogs.services';
import {Blog} from './shared/blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    public blogs: Blog[] = [];

    constructor(private blogsService: BlogsService) {
    }

    ngOnInit() {
        this.blogsService.getBlogs().subscribe(
            blogs => this.blogs = blogs,
            (error: Response) => console.log(error),
        );
    }
}
