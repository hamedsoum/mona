import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {faCog} from "@fortawesome/free-solid-svg-icons";

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
