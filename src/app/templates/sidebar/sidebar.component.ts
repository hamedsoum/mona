import {Component, Input} from '@angular/core';

@Component({
  selector: 'ma-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  @Input() styleClass?: string;

}
