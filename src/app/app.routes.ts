import {Routes} from '@angular/router';
import {MA_ROUT} from './core/constants/ma-route.contant';
import {LoginComponent} from './login/login.component';
import {MAProjectsComponent} from './modules/projects/ma-projects.component';
import {MAProjectRecordComponent} from './modules/projects/record/ma-project-record.component';
import {MAFormComponent} from './modules/projects/form/ma-form.component';

export const routes: Routes = [
    {path: MA_ROUT.authentication.login, component: LoginComponent},
    {path: MA_ROUT.projects.all, component: MAProjectsComponent},
    {path: MA_ROUT.projects.record, component: MAProjectRecordComponent},
    {path: MA_ROUT.projects.form, component: MAFormComponent}
];
