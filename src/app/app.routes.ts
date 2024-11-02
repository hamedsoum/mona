import { Routes } from '@angular/router';
import {MA_ROUT} from './core/constants/ma-route.contant';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
    {path: MA_ROUT.authentication.login, component: LoginComponent}
];
