import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()

export class AuthService {
    constructor(private http: Http) {
    }
    signin(email: string, password: string) {
        return this.http.post('http://medback.dev/api/users/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        );
    }
}

