import {Component, Input} from '@angular/core';
import {faBell, faCog} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
    selector: 'ma-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    readonly ICON_NOTIFICATIONS = faBell;
    readonly ICON_SETTINGS = faCog;

    @Input() styleClass?: string;

    constructor(private router: Router) {
    }

    public goTo(url: string): void {
        this.router.navigateByUrl(url).then();
    }

}
