import {Component, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out.animation';
import {User} from '../../users/shared/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../users/shared/users.services';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})
export class CalendarComponent implements OnInit {
    user: User = new User();

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private usersService: UsersService) {
    }

    ngOnInit() {
        var id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            if (!id)
                return this.router.navigate(['admin']);

            return this.usersService.getUser(id).subscribe(
                user => {
                    this.user = user;
                },
                response => {
                    if (response.status === 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }
}
