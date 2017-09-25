import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from '../auth-guard.service';
import {SchedulesComponent} from './schedules.component';
import {ScheduleFormComponent} from './schedule-form/schedule-form.component';
import {CalendarComponent} from "./calendar/calendar.component";

const usersRoutes: Routes = [
    {
        path: 'admin/schedules', component: SchedulesComponent,
        children: [
            {path: 'calendar/:id', component: CalendarComponent},
        ],
        canActivate: [AuthGuardService]
    },
    // {path: '**', redirectTo: '/admin/users'}
];

export const schedulesRouting = RouterModule.forChild(usersRoutes);

