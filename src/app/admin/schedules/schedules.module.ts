import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AuthService} from '../auth.service';


import {SchedulesService} from './shared/schedules.services';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {SchedulesComponent} from './schedules.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
    declarations: [
        SchedulesComponent,
        ScheduleFormComponent,
        CalendarComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MultiselectDropdownModule,
    ],
    exports: [
        SchedulesComponent
    ],
    providers: [ SchedulesService, AuthService],
})
export class SchedulesModule {
}
