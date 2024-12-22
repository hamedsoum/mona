import {Component, Input} from '@angular/core';
import {faBars, faBell, faCog} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
    selector: 'ma-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    readonly ICON_MENU = faBars;
    readonly ICON_NOTIFICATIONS = faBell;
    readonly ICON_SETTINGS = faCog;

    @Input() styleClass?: string;

    constructor(private router: Router) {
        console.log('Component Created');
    }


    public goTo(url: string): void {
        console.log('Go to Url ===>', url);
        this.router.navigateByUrl(url).then();
    }

}
