import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PostService {
    constructor(private http: Http) {

    }getPosts(): Observable<any> {
        return this.http.get('http://medback.dev/api/posts').map(
                (response: Response) => {
                    return response.json().posts;
                }
            );
    }
}

