import {NgModule} from '@angular/core';import {LoginComponent} from './login/login.component';import {SHAuthenticationBaseService} from '@sh/authentication';import {MAAuthenticationService} from '../api/services/ma-authentication.service';@NgModule({    declarations: [LoginComponent],    exports: [LoginComponent],    providers: [        {provide: SHAuthenticationBaseService, useExisting: MAAuthenticationService},    ]})export class AppModule {}