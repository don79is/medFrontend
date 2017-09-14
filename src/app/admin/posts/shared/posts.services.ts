import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth.service';
import {Post} from './post';
@Injectable()
export class PostsService {
    constructor(private http: Http, private authService: AuthService) {

    }
    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medback.dev//api/posts?token=' + token, ).map(
            (response: Response) => {
                return response.json().posts;
            }
        );
    }
    getPost(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medback.dev//api/posts/' + id + '?token=' + token, ).map(
            (response: Response) => {
                return response.json().post;
            }
        );
    }

    createPost(post) {
        const token = this.authService.getToken();
        return this.http.post('http://medback.dev/api/posts?token=' + token,
            post,
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        ).map(
            (response: Response) => response.json()
        );
    }
    updatePost(post) {
        const  token = this.authService.getToken();
        return this.http.put('http://medback.dev//api/posts/' + post.id + '?token=' + token,
            JSON.stringify(post),
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (responce: Response) => responce.json()
        );
    }
    deletePost (id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medback.dev/api/posts/' + id + '?token=' + token);
    }
}

