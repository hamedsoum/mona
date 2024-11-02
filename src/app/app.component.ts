import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MAAuthenticationService} from './core/services/ma-authentication.service';
import {SidebarComponent} from './templates/sidebar/sidebar.component';
import {HeaderComponent} from './templates/header/header.component';
import {MAFooterComponent} from './templates/footer/ma-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MAFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {class: 'sh-flex-row sh-height-full'}
})
export class AppComponent {

  private authenticationService = inject(MAAuthenticationService);

  public login(): void {
    this.authenticationService.login({ username: 'johnDoe', password: '*****'})
  }
}
