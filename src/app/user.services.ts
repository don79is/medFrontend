import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
@Injectable()
export class UserService {
    constructor(private http: Http, private authService: AuthService) {

    }getUsers(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medback.dev//api/users?token=' + token, ).map(
                (response: Response) => {
                    return response.json().users;
                }
            );
    }
}

