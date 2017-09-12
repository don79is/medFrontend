import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
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
    createUser(first_name: string,
               last_name: string,
               email: string,
               position: string,
               password: string,
               role_id: string) {
        const token = this.authService.getToken();
        return this.http.post('http://medback.dev/api/users?token=' + token,
            {first_name: first_name,
                last_name: last_name,
                email: email,
                position: position,
                password: password,
                role_id: role_id},
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }
    deleteUser (id: any) {
        const token = this.authService.getToken ();
        return this.http.delete('http://medback.dev/api/users' + id + '?token=' + token);
    }
}




