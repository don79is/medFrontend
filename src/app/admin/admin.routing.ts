import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from './auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SigninComponent} from './auth/signin/signin.component';

const adminRoutes: Routes = [
    { path: 'admin/login', component: SigninComponent },
    {path: 'admin', component: DashboardComponent, canActivate: [AuthGuardService]},
];

export const adminRouting  = RouterModule.forChild(adminRoutes);

