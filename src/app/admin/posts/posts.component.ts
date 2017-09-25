import {Component, OnInit} from '@angular/core';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.services';
import {fadeInAnimation} from '../../animations/fade-in.animation';
import {AppService} from '../../shared/app.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-posts',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    public posts: Post[] = [];
    subscription: Subscription;
    constructor(private postsService: PostsService,
    private  appService: AppService) {
    }

    ngOnInit() {
        this.loadPosts();
        // this.usersService.getUsers().subscribe(
        //     users => this.users = users,
        //     (error: Response) => console.log(error),
        // );
        this.subscription = this.appService.on('posts-updated').subscribe(() => this.loadPosts());
    }
    loadPosts() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error),
        );
    }
    onDelete(post) {
        if (confirm('Are you sure?' + post.first_name + '?')) {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
            this.postsService.deletePost(post.id)
                .subscribe(null, error => {
                    alert('Could not delete post.');
                    this.posts.splice( index, 0, post);
                });
        }
    }
}
