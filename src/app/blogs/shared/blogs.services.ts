import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Blog} from './blog';
@Injectable()
export class BlogsService {
    constructor(private http: Http) {

    }
    getBlogs(): Observable<any> {
        return this.http.get('http://localhost:4200/blog').map(
            (response: Response) => {
                return response.json().blogs;
            }
        );
    }
    // getPost(id: any): Observable<any> {
    //     const token = this.authService.getToken();
    //     return this.http.get('http://medback.dev//api/posts/' + id + '?token=' + token, ).map(
    //         (response: Response) => {
    //             return response.json().post;
    //         }
    //     );
    // }
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

