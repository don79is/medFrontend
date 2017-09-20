import {Component, OnInit} from '@angular/core';
import {BlogsService} from '../shared/blogs.services';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../shared/blog';

@Component({
    selector: 'app-blog-posts',
    templateUrl: './blog-posts.component.html',
    styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
    post: Post = new Post();


    constructor(
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private blogsService: BlogsService) {
    }

    ngOnInit() {
        const id = this.activatedRoute.params.subscribe(params => {
            const id = params['id'];
            this.blogsService.getBlog(id)
                .subscribe(
                    post => this.post = post,
                    response => {
                        if (response.status === 404) {
                            this.router.navigate(['Not found']);
                        }
                    });
        });
    }

}
