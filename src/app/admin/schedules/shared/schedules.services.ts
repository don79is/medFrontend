import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth.service';
import {GlobalVariable} from '../../../config/global';
@Injectable()
export class SchedulesService {

    private  baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http, private authService: AuthService) {

    }
}

