import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {SHMenuItem} from '../header/sh-menu-item';
import {SHUtils} from "@sh/base";
import {faBars, faDashboard, faList} from "@fortawesome/free-solid-svg-icons";
import {MA_ROUTE} from "../../constants/ma-route.contant";

@Component({
    selector: 'ma-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    readonly ICON_ALL = faBars;

    @Input() styleClass?: string;

    items: SHMenuItem[] = [];

    constructor(private router: Router) {
        this.buildItems();
    }

    public goTo(url: string): void {
        this.router.navigateByUrl(url).then();
    }

    public buildItems(): void {
        this.items = [
            {
                id: SHUtils.uuid(),
                icon: faList,
                label: 'View all projects',
                link: MA_ROUTE.projects.all,
                click: () => this.goTo(MA_ROUTE.projects.all)
            },
            {
                id: SHUtils.uuid(),
                icon: faDashboard,
                label: 'Dasboards',
                link: MA_ROUTE.dashboard,
                click: () => this.goTo(MA_ROUTE.dashboard)
            },
        ];
    }

    protected readonly ICON_MENU = faBars;
}
