import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BlogsService {
    constructor(private http: Http) {

    }
    getBlogs(): Observable<any> {
        return this.http.get('http://medback.dev/api/posts/allposts').map(
            (response: Response) => {console.log(response.json().posts);
                return response.json().posts;
            }
        );
    }
    getBlog(id: any): Observable<any> {
        return this.http.get('http://medback.dev//api/post/' + id ).map(
            (response: Response) => {
                return response.json().post;
            }
        );
    }
    //
    // createPost(post) {
    //     const token = this.authService.getToken();
    //     return this.http.post('http://medback.dev/api/posts?token=' + token,
    //         post,
    //         {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
    //     ).map(
    //         (response: Response) => response.json()
    //     );
    // }
    // updatePost(post) {
    //     const  token = this.authService.getToken();
    //     return this.http.put('http://medback.dev//api/posts/' + post.id + '?token=' + token,
    //         JSON.stringify(post),
    //         {headers: new Headers({'Content-type': 'application/json'})}
    //     ).map(
    //         (responce: Response) => responce.json()
    //     );
    // }
    // deletePost (id: any) {
    //     const token = this.authService.getToken();
    //     return this.http.delete('http://medback.dev/api/posts/' + id + '?token=' + token);
    // }
}

