import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MAAuthenticationService} from '../api/services/ma-authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {

  private authenticationService = inject(MAAuthenticationService);

  public login(): void {
    this.authenticationService.login({ username: 'johnDoe', password: '*****'})
  }
}
