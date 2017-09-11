import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class AuthService {
    constructor(private http: Http) {
    }

    signin(email: string, password: string) {
        return this.http.post('http://medback.dev/api/users/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XTMLHttpRequest'})}
        ).map(
            (response: Response) => {
                const token = response.json().token;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return {
                    token: token, decoder_token: JSON.parse(window.atob(base64))
                };
            }
        ).do(
            tokenData => {localStorage.setItem('token', tokenData.token);
            }
        );
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
