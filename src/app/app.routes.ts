import {Routes} from '@angular/router';
import {MA_ROUTE} from './core/constants/ma-route.contant';
import {LoginComponent} from './core/login/login.component';
import {MAProjectsComponent} from './core/modules/projects/ma-projects.component';
import {MAProjectRecordComponent} from './core/modules/projects/record/ma-project-record.component';
import {MAFormComponent} from './core/modules/projects/form/ma-form.component';
import {DashboardComponent} from "./core/modules/dashboard/dashboard.component";

export const routes: Routes = [
    {path: MA_ROUTE.authentication.login, component: LoginComponent},
    {path: MA_ROUTE.projects.all, component: MAProjectsComponent},
    {path: MA_ROUTE.projects.record, component: MAProjectRecordComponent},
    {path: MA_ROUTE.projects.form, component: MAFormComponent},
    {path: MA_ROUTE.dashboard, component: DashboardComponent},
];
