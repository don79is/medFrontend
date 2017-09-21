import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth.service';
import {GlobalVariable} from '../../../config/global';
@Injectable()
export class UsersService {

    private  baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http, private authService: AuthService) {

    }
    getUsers(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'users?token=' + token, ).map(
                (response: Response) => {
                    return response.json().users;
                }
            );
    }
    getUser(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'users/' + id + '?token=' + token, ).map(
            (response: Response) => {
                return response.json().user;
            }
        );
    }
    createUser(user) {
        const token = this.authService.getToken();
        return this.http.post(this.baseApiUrl + 'users?token=' + token,
            user,
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        ).map(
            (response: Response) => response.json()
        );
    }
    updateUser(user) {
        const  token = this.authService.getToken();
        return this.http.put(this.baseApiUrl + 'users/' + user.id + '?token=' + token,
            user,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (responce: Response) => responce.json()
        );
    }
    deleteUser (id: any) {
        const token = this.authService.getToken();
        return this.http.delete(this.baseApiUrl + 'users/' + id + '?token=' + token);
    }
}




