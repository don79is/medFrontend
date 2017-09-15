import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RolesService {
    constructor(private http: Http, private authService: AuthService) {

    }
    getRoles(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medback.dev/api/roles?token=' + token, ).map(
            (response: Response) => {
                return response.json().roles;
            }
        );
    }
    getRole(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medback.dev/api/roles/' + id + '?token=' + token, ).map(
            (response: Response) => {
                return response.json().role;
            }
        );
    }
    createRole(role) {
        const token = this.authService.getToken();
        return this.http.post('http://medback.dev/api/roles?token=' + token,
            role,
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        ).map(
            (response: Response) => response.json()
        );
    }
    updateRole(role) {
        const  token = this.authService.getToken();
        return this.http.put('http://medback.dev/api/roles/' + role.id + '?token=' + token,
            JSON.stringify(role),
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (responce: Response) => responce.json()
        );
    }
    deleteRole (id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medback.dev/api/roles/' + id + '?token=' + token);
    }
}

