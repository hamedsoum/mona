import {Component, Input} from '@angular/core';
import {faBars, faBell, faCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ma-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly  ICON_MENU = faBars;
  readonly  ICON_NOTIFICATIONS = faBell;
  readonly  ICON_SETTINGS = faCog;

  @Input() styleClass?: string;
}
