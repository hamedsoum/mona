import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MAAuthenticationService} from './core/services/ma-authentication.service';
import {MATemplatesModule} from './templates/ma-templates.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MATemplatesModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    host: {class: 'sh-flex-row sh-height-full'}
})
export class AppComponent {

    private authenticationService = inject(MAAuthenticationService);

    constructor() {
        console.log('App Component');
    }

    public login(): void {
        this.authenticationService.login({username: 'johnDoe', password: '*****'});
    }
}
